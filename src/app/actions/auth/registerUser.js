"use server"

import dbConnect, { collectionNameObj } from "@/lib/dbConnect"

export const registerUser = async (payload) => {
    // console.log(payload)
    // const { name, email, password } = payload
    const userCollection = dbConnect(collectionNameObj.userCollection)
    const user = await userCollection.findOne({ email: payload?.email })
    if (!user) {
        const result = await userCollection.insertOne(payload)
        return result
    } else {
        return { error: 'User already have' }
    }
}