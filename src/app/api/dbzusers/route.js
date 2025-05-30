// src/app/api/mongousers/route.js

import connectMongoDB from "../../../../lib/mongodb"
import DbzUser from "../../../../models/dbzusers";
import { NextResponse } from "next/server"

export async function GET() {
    await connectMongoDB();
    const users = await DbzUser.find();
    return NextResponse.json({ users })
}

export async function POST(request) {

    try {

        const data = await request.json();
        await connectMongoDB();
        await DbzUser.create(data);
        return NextResponse.json({ message: 'DBZ User added.' }, { status: 201 })

    } catch (error) {
        console.log(error)
        throw new Error("Database error.");
    }

}

export async function DELETE(request) {

    try {

        const id = await request.json();
        await connectMongoDB();
        await DbzUser.deleteOne({ _id: id })
        return NextResponse.json({ message: 'DBZ User deleted.' }, { status: 201 })

    } catch (error) {
        console.log(error)
        throw new Error("Database error.");
    }

}