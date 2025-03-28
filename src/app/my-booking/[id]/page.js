import BookingUpdateFrom from '@/app/components/forms/BookingUpdateFrom'
import { headers } from 'next/headers'
import React from 'react'

export default async function UpdateBookingPage({ params }) {
    const p = await params
    const res = await fetch(`http://localhost:3000/api/my-booking/${p.id}`, {
        headers: await headers()
    })
    const data = await res.json()
    return (
        <div>
            <BookingUpdateFrom data={data} />
        </div>
    )
}
