import { authOptions } from "@/lib/authOptions"
import dbConnect, { collectionNameObj } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"


// GET Request
export const GET = async (req, { params }) => {
    const p = await params
    const bookingCollection = dbConnect(collectionNameObj.bookingCollection)
    const query = { _id: new ObjectId(p.id) }


    //validating is the owner of the booking or not
    const session = await getServerSession(authOptions)
    const email = session?.user?.email
    const singleBooking = await bookingCollection.findOne(query)
    const isOwnerOk = email === singleBooking?.email
    if (isOwnerOk) {
        return NextResponse.json(singleBooking)
    } else {
        return NextResponse.json({ message: "Forbidden GET access" }, { status: 403 })
    }
}


// PATCH request (Update)
export const PATCH = async (req, { params }) => {
    const p = await params
    const bookingCollection = dbConnect(collectionNameObj.bookingCollection)
    const query = { _id: new ObjectId(p.id) }

    //validating is the owner of the booking or not
    const session = await getServerSession(authOptions)
    const email = session?.user?.email
    const currentBookingData = await bookingCollection.findOne(query)
    const isOwnerOk = email === currentBookingData?.email
    if (isOwnerOk) {


        const body = await req.json()
        const filter = {
            $set: { ...body }
        }
        const option = {
            upsert: true
        }
        const updateRes = await bookingCollection.updateOne(query, filter, option)
        revalidatePath("/my-booking")
        return NextResponse.json(updateRes)
    } else {
        return NextResponse.json({ message: "Forbidden access" }, { status: 403 })
    }
}
