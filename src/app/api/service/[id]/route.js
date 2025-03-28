import { NextResponse } from "next/server"
import dbConnect, { collectionNameObj } from '@/lib/dbConnect'
import { ObjectId } from 'mongodb'
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"
import { revalidatePath } from "next/cache"


export const DELETE = async (req, { params }) => {
    const p = await params
    const query = { _id: new ObjectId(p.id) }
    const bookingCollection = dbConnect(collectionNameObj.bookingCollection)
    const session = await getServerSession(authOptions)
    const currentBooking = await bookingCollection.findOne(query)
    // check is the owner email and booked account email same or not
    const isOwnerOk = session?.user?.email === currentBooking?.email
    // if isOwnerOk then delete the booking
    if (isOwnerOk) {
        const deleteResult = await bookingCollection.deleteOne(query)
        revalidatePath("/my-booking")
        return NextResponse.json(deleteResult)
    } else {
        return NextResponse.json({ message: "You are not authorized to delete this booking" }, { status: 401 })
    }

}


export const GET = async (req, { params }) => {
    const p = await params

    const serviceCollection = dbConnect(collectionNameObj.serviceCollection)
    const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) })
    return NextResponse.json(data)
}

