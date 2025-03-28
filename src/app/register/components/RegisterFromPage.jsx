"use client"

import { registerUser } from "@/app/actions/auth/registerUser";
import SocialLogin from "@/app/login/components/SocialLogin";

export default function RegisterFromPage() {
  const handleRegister = async (e) => {
    e.preventDefault();
    const from = e.target
    const name = from.name.value
    const email = from.email.value
    const password = from.password.value
    // const registerData = { name, email, password }
    // console.log({ name, email, password })
    await registerUser({ name, email, password })
  }
  return (
    <div>
      <form
        onSubmit={handleRegister}
        className='flex flex-col gap-2 border-4 border-white p-10'>
        <label htmlFor="email">Name</label>
        <input type="text" name="name" className='bg-white rounded-sm text-black' />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" required className='bg-white rounded-sm text-black' />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" required className='bg-white rounded-sm text-black' />
        <button className="btn " type="submit">Register</button>
        {/* <a href="/register">Register</a> */}
      </form>
      <div>OR</div>
      {/* social Register */}
      <SocialLogin />
    </div>
  )
}

