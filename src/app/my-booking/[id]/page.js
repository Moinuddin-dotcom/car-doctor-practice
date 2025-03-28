import BookingUpdateFrom from '@/app/components/forms/BookingUpdateFrom'
import React from 'react'

export default async function UpdateBookingPage({ params }) {
    const p = await params
    const res = await fetch(`http://localhost:3000/api/my-booking/${p.id}`)
    const data = await res.json()
    return (
        <div>
            <BookingUpdateFrom data={data} />
        </div>
    )
}
