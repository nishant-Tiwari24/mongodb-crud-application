import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import { Topic } from "@/models/models";

export async function PUT(req,{params}) {
    const {id} = params;
    const {newTitle:title, newDescription:description}= await req.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, {title, description});
    return NextResponse.json({message: "updated"},{staus : 200});
}

export async function GET(req,{params}) {
    const {id} = params;
    await connectMongoDB();
    await Topic.findOne({_id : id});
    return NextResponse.json({topics},{status:200})
}