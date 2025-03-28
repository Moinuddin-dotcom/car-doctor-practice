
import CheckoutFrom from '@/app/components/forms/CheckoutFrom'
import React from 'react'

export default async function CheckoutPage({ params }) {
    const p = await params
    const res = await fetch(`https://car-doctor-practice.vercel.app/api/service/${p.id}`)
    const data = await res.json()
    return (
        <div>
            <CheckoutFrom data={data} />
        </div>
    )
}
