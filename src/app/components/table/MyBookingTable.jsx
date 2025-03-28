import DeleteBottom from '@/app/my-booking/components/DeleteBottom'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaEdit } from 'react-icons/fa'

export default function MyBookingTable({ data }) {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Service Image</th>
                        <th>Service Name</th>
                        <th>Service Date</th>
                        <th>Service Price</th>
                        <th>Adress</th>
                        <th>Actions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map(item => {
                        return (
                            <tr key={item._id}>
                                <td>
                                    <Image 
                                    src={item.service_img} 
                                    alt={item.service_name} 
                                    width={50} 
                                    height={50}
                                    className='rounded-full' />
                                </td>
                                <td>{item.service_name}</td>
                                <td>{item.date}</td>
                                <td>{item.service_price}</td>
                                <td>{item.address}</td>
                                <td>
                                    <Link href={`/my-booking/${item._id}`}>
                                        <FaEdit className='text-2xl text-blue-800 cursor-pointer' />
                                    </Link>
                                </td>
                                <td>
                                    <DeleteBottom id={item._id} />
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}
