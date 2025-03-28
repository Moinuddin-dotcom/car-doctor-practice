import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"


export const middleware = async (req) => {
    // console.log("From Middleware=>", req.nextUrl.pathname)
    // To add token
    const token = await getToken({ req })
    if (token) {
        return NextResponse.next()
    } else {
        return NextResponse.redirect(new URL("/login", req.url))
    }
}

export const config = {
    matcher: [
        '/my-booking',
        '/my-booking/:path*',
        '/checkout/:path*'
    ],
}