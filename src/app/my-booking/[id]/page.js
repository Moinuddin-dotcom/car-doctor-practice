import BookingUpdateFrom from '@/app/components/forms/BookingUpdateFrom'
import { headers } from 'next/headers'
import React from 'react'

export default async function UpdateBookingPage({ params }) {
    const p = await params
    const res = await fetch(`https://car-doctor-practice.vercel.app/api/my-booking/${p.id}`, {
        headers: new Headers(await headers())
    })
    const data = await res.json()
    return (
        <div>
            <BookingUpdateFrom data={data} />
        </div>
    )
}
