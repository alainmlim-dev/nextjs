import connectMongoDB from "../../../../lib/mongodb"
import DbzUser from "../../../../models/dbzusers"
import { NextResponse } from "next/server"

export async function GET(req) {

    try {
        console.log(req)
        await connectMongoDB();
        const user = await DbzUser.find();
        return NextResponse.json({ user })
    } catch (err) {
        console.log(err)
    }

    // await connectMongoDB();
    // const user = await DbzUser.find();
    // return NextResponse.json({ user })
}