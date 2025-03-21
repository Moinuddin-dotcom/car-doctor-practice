import dbConnect, { collectionNameObj } from '@/lib/dbConnect'
import { ObjectId } from 'mongodb'
import Image from 'next/image'
import React from 'react'

export default async function ServiceDetailsPage({ params }) {
    const p = await params

    const serviceCollection = dbConnect(collectionNameObj.serviceCollection)
    const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) })
    return (
        <div>
            <section className='flex justify-center'>
                <figure className=' relative'>
                    <Image src={"/assets/images/checkout/checkout.png"}
                        width={1140}
                        height={300}
                        alt='banner' />
                    <div className='transparent-layer absolute w-full h-full border-4 border-red-800 top-0  '>
                        <div className='w-full h-full flex items-center '>
                            <h1 className='text-white font-bold text-4xl ps-16'>Services details</h1>
                        </div>
                    </div>
                </figure>
            </section>
            <section>
                <div className='flex justify-center'>
                    <Image src={data.img} alt={data.title} width={500} height={400} />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                    <h2>Price: {data.price}$</h2>
                </div>
            </section>
            {/* <p>{p?.id}</p>
            <p>{JSON.stringify(data)}</p> */}
        </div>
    )
}
