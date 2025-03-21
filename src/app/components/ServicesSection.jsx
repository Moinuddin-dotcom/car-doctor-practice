import dbConnect, { collectionNameObj } from '@/lib/dbConnect'
import Image from 'next/image'
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";

export default async function ServicesSection() {
    const serviceCollection = dbConnect(collectionNameObj.serviceCollection)
    const data = await serviceCollection.find({}).toArray()
    return (
        <div className='grid grid-cols-12 gap-10'>
            {data.map(item => {
                return (
                    <div key={item._id} className='col-span-12 md:col-span-6 lg:col-span-4 '>
                        <div className='card border-2'>
                            <div >
                                <Image src={item.img} alt={item.title} width={500} height={400} />
                                <div className='flex justify-between items-center px-5'>
                                    <div>
                                        <h2>{item.title}</h2>
                                        <h3 className='text-amber-300'>Price: {item.price}$</h3>
                                    </div>
                                    <Link href={`/services/${item._id}`} className='text-amber-300'>
                                        <FaArrowRight />
                                    </Link>
                                </div>
                            </div>


                        </div>
                    </div>
                )
            })}
        </div>
    )
}
