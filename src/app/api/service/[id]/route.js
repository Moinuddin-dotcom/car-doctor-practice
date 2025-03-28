import { NextResponse } from "next/server"
import dbConnect, { collectionNameObj } from '@/lib/dbConnect'
import { ObjectId } from 'mongodb'


export const DELETE = async (req, { params }) => {
    const p = await params
    const serviceCollection = dbConnect(collectionNameObj.serviceCollection)
    const query = { _id: new ObjectId(p.id) }
    const deleteResult = await serviceCollection.deleteOne(query)
    return NextResponse.json(deleteResult)
}


export const GET = async (req, { params }) => {
    const p = await params

    const serviceCollection = dbConnect(collectionNameObj.serviceCollection)
    const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) })
    return NextResponse.json(data)
}

