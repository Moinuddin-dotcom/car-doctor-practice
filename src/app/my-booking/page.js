'use client'
import React, { useEffect, useState } from 'react'
import MyBookingTable from '../components/table/MyBookingTable'

export default function MyBookings() {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchMyBookings = async () => {
            const res = await fetch('http://localhost:3000/api/service')
            const d = await res.json()
            setData(d)
        }
        fetchMyBookings()
    }, [])

    return (
        <div>
            <MyBookingTable data={data} />
        </div>
    )
}
