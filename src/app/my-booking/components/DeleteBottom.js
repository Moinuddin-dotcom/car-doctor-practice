'use client'
import { useRouter } from 'next/navigation'
import { FaTrash } from 'react-icons/fa'

export default function DeleteBottom({ id }) {
    const router = useRouter()
    const handleDelete = async (id) => {
        const res = await fetch(`https://car-doctor-practice.vercel.app/api/service/${id}`, {
            method: 'DELETE'
        })
        const data = await res.json()
        console.log(data)
        router.refresh()

    }
    return (
        <>
            <button onClick={() => handleDelete(id)} className="btn">
                <FaTrash className='text-2xl text-red-800 cursor-pointer' />
            </button>
        </>
    )
}
