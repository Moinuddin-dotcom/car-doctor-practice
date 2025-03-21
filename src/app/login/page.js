import React from 'react'

export default function Login() {
    return (
        <div className='bg-black h-screen flex flex-col justify-center items-center text-white '>
            <h1 className='text-3xl text-white'>Login</h1>
            <form 
            // onSubmit={handleLogin} 
            className='flex flex-col gap-2 border-4 border-white p-10'>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required className='bg-white rounded-sm' />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required className='bg-white rounded-sm' />
                <button className="btn " type="submit">Log in</button>
                {/* <a href="/register">Register</a> */}
            </form>
        </div>
    )
}
