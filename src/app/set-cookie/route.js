// app/api/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(NextRequest) {

    // set a cookie named jwt with a value and some options
    cookies().set('name', 'tom', {
        maxAge: 60 * 60 * 24, // one day in seconds
        httpOnly: true, // prevent client-side access
        sameSite: 'strict', // prevent cross-site requests
    });

    return NextResponse.json({ message: 'Cookie set' });
}