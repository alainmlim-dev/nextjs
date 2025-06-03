import connectMongoDB from "../../../../../lib/mongodb"
import DbzUser from "../../../../../models/dbzusers"
import { NextResponse } from "next/server"

export async function GET(req) {
    
    await connectMongoDB();
    console.log(req.headers)
    const id = req.headers.get('userid')
    console.log(id)
    const user = await DbzUser.findOne({ _id: id });
    return NextResponse.json({ user })
}