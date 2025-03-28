import dbConnect, { collectionNameObj } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export const GET = async (req, { params }) => {
    const p = await params
    const bookingCollection = dbConnect(collectionNameObj.bookingCollection)
    const query = { _id: new ObjectId(p.id) }
    const singleBooking = await bookingCollection.findOne(query)
    return NextResponse.json(singleBooking)
}


export const PATCH = async (req, { params }) => {
    const p = await params
    const body = await req.json()
    const bookingCollection = dbConnect(collectionNameObj.bookingCollection)
    const query = { _id: new ObjectId(p.id) }
    const filter = {
        $set: { ...body }
    }
    const option = {
        upsert: true
    }
    const updateRes = await bookingCollection.updateOne(query, filter, option)
    revalidatePath("/my-booking")
    return NextResponse.json(updateRes)
}
