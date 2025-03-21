import React from 'react'
import LoginFromPage from './components/LoginFromPage'

export default function Login() {
    return (
        <div className='bg-black h-screen flex flex-col justify-center items-center text-white '>
            <h1 className='text-3xl text-white'>Login</h1>
            {/* Log in form here */}
            <LoginFromPage />
        </div>
    )
}
