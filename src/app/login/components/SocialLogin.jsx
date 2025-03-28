"use client"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'

export default function SocialLogin() {
    const router = useRouter()
    const session = useSession()
    const handleSocialLogin = (providerName) => {
        // console.log("Social ProviderName Login=>", providerName)
        signIn(providerName)

    }
    useEffect(() => {
        if (session?.status == 'authenticated') {
            router.push('/')
            toast.success('Login success')
        }
    }, [session?.status])

    return (
        <div className="flex gap-2">
            <button onClick={() => handleSocialLogin('google')} className="btn ">Login with Google</button>
            <button onClick={() => handleSocialLogin('github')} className="btn ">Login with GitHub</button>
        </div>
    )
}
