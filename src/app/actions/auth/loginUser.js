"use server"

import dbConnect, { collectionNameObj } from "@/lib/dbConnect"

export const loginUser = async (payload) => {
    const { email, password } = payload
    const userCollection = dbConnect(collectionNameObj.userCollection)
    const user = await userCollection.findOne({ email })
    if (!user) return null
    if (user.password!==password) return null
    return user
}