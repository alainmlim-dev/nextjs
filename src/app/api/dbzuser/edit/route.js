import connectMongoDB from "../../../../../lib/mongodb"
import DbzUser from "../../../../../models/dbzusers"
import { NextResponse } from "next/server"

export async function PUT(req) {
    
    const data = await req.json();
    console.log(data)
    await connectMongoDB();
    await DbzUser.updateOne(
        { _id: data._id },
        {
            name: data.name,
            planet: data.planet,
            spouse: data.spouse
        }
    );
    return NextResponse.json({ message: 'DBZ User updated.' }, { status: 201 })

}