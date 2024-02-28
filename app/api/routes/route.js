import { NextResponse } from "next/server";
import connectMongodb from "../../../libs/mongodb";
import { Topic } from "../../../models/models";

export async function POST(req) {
    const {title, description} = await req.json();
    await connectMongodb();
    await Topic.create({title, description})
    if (!title || !description) throw new Error('Missing required fields');
    return NextResponse.json({message: "Topic created"},
    {status: 201});
}

export async function GET() {
    await connectMongodb();
    await Topic.find();
    return NextResponse.json({Topic});
}

export async function  DELETE(req){
    let topicId= req.nextUrl.searchParams.get('id');
    await connectMongodb();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message: "Topic deleted"},
    {status: 200});
}