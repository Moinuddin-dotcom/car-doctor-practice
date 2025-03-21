import React from 'react'
import RegisterFromPage from './components/RegisterFromPage'

export default function Register() {

    return (
        <div>
            <div className='bg-black h-full flex flex-col justify-center items-center text-white '>
                <h1 className='text-3xl text-white'>Register</h1>
                {/* Register From page here */}
                <RegisterFromPage />
            </div>
        </div>
    )
}
