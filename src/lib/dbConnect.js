import { MongoClient, ServerApiVersion } from "mongodb";


export const collectionNameObj = {
    serviceCollection: "test_services",
    userCollection: "test_users",
    bookingCollection: "test_bookings"

}

export default function dbConnect(collectionName) {
    const uri = process.env.NEXT_PUBLIC_MONGO_URI;
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    return client.db(process.env.DB_NAME).collection(collectionName)
}