"use client"

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import SocialLogin from "./SocialLogin"

export default function LoginFromPage() {
    const router = useRouter()
    const handleLogin = async (e) => {
        e.preventDefault()
        const from = e.target
        const email = from.email.value
        const password = from.password.value
        try {
            const res = await signIn('credentials', { email, password, redirect: false, })
            if (res.ok) {
                router.push('/')
                from.reset()
                toast.success('Login success')
            } else {
                // alert('Authintication failed');
                toast.error('Authentication failed')
            }
            // callbackUrl: "/"
        } catch (error) {
            console.log(error)
        }
        // console.log({ email, password })
    }
    return (
        <div>
            <form
                onSubmit={handleLogin}
                className='flex flex-col gap-2 border-4 border-white p-10'>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required className='bg-white rounded-sm text-black' />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required className='bg-white rounded-sm text-black' />
                <button className="btn " type="submit">Log in</button>
                {/* <a href="/register">Register</a> */}
            </form>
            <div>OR</div>
            {/* social login */}
            <SocialLogin />
        </div>
    )
}
