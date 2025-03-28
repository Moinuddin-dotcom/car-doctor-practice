"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export default function BookingUpdateFrom({ data }) {
    const { data: session } = useSession()
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("From handleSubmit")
        const from = e.target
        // const name = from.name.value
        // const email = from.email.value
        const phone = from.phone.value
        const address = from.address.value
        const date = from.date.value
        // const dueAmount = from.dueAmount.value
        const bookingPayload = {
            // from session
            // customerName: name,
            // email,

            // user Input
            phone,
            address,
            date,
            // dueAmount,

            // Extra Information
            // service_id: data?._id,
            // service_name: data?.title,
            // service_img: data?.img,
            // service_price: data?.price,
        }
        console.log(bookingPayload)

        const res = await fetch(`https://car-doctor-practice.vercel.app/api/my-booking/${data._id}`, {
            method: 'PATCH',
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            body: JSON.stringify(bookingPayload)
        })
        const resData = await res.json()
        console.log('Update Data:', resData)
        if (resData.modifiedCount > 0) {
            toast.success('Booking updated successfully')
            router.push('/my-booking')
        } else {
            toast.error('Failed to update booking')
        }
    }
    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Book service: {data?.title} </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={session?.user?.name}
                        readOnly
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        defaultValue={session?.user?.email}
                        readOnly
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        defaultValue={data?.phone}
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your phone number"
                    />
                </div>

                {/* Date */}
                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                        Date
                    </label>
                    <input
                        type="date"
                        name="date"
                        defaultValue={data?.date}
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

                    />
                </div>

                {/* Due Amount */}
                <div>
                    <label htmlFor="dueAmount" className="block text-sm font-medium text-gray-700">
                        Due Amount
                    </label>
                    <input
                        type="number"
                        name="dueAmount"
                        defaultValue={data.service_price}
                        readOnly
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter due amount"
                        min="0"
                        step="0.01"
                        required
                    />
                </div>

                {/* Present Address */}
                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Present Address
                    </label>
                    <textarea
                        // id="address"
                        name="address"
                        // value={formData.address}
                        // onChange={handleChange}
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your address"
                        rows="3"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Order Confirm
                    </button>
                </div>
            </form>
        </div>
    )
}
