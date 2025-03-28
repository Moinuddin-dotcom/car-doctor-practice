// 'use client'
// import React, { useEffect, useState } from 'react'
import MyBookingTable from '../components/table/MyBookingTable'
import { headers } from 'next/headers'

const fetchMyBookings = async () => {
    const res = await fetch('https://car-doctor-practice.vercel.app/api/service', {
        headers: new Headers(await headers())
    })
    const d = await res.json()
    return d
}

export default async function MyBookings() {
    const data = await fetchMyBookings()
    // const [data, setData] = useState([])
    // useEffect(() => {

    //     fetchMyBookings()
    // }, [])

    return (
        <div>
            <MyBookingTable data={data} />
        </div>
    )
}
