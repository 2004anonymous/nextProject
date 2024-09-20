import connectDb from "@/libs/dbConnect";
import Project from "@/models/project";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params
    await connectDb();
    const project = await Project.findById(id)
    return NextResponse.json(project)
}
export async function PUT(request: Request, { params }: { params: { id: string } }) {
    await connectDb();
    const {id} = params;
    const { title, description } = await request.json();
    await Project.findByIdAndUpdate(id, { title, description })
    return NextResponse.json({ message: "Project updated succesfully !" });
}