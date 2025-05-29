// src/app/api/mongousers/route.js

import connectMongoDB from "../../../../lib/mongodb"
import Users from '../../../../models/users'
import { NextResponse } from "next/server"

export async function GET() {
    await connectMongoDB();
    const users = await Users.find();
    return NextResponse.json({ users })
}