import connectDb from "@/libs/dbConnect";
import Project from "@/models/project";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
    let result = null;
    const { title, description } = await request.json();
    await connectDb();
    const newProject = new Project({ title, description })
    try {
        await newProject.save();

    } catch (error) {
        console.log("Error occured : " + error);
    }
    return NextResponse.json({ message: "New project added succesfully", status: 201 });
}

export async function GET() {
    await connectDb();
    const projects = await Project.find();
    return NextResponse.json({ projects })

}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    await connectDb();
    await Project.findByIdAndDelete(id);
    return NextResponse.json({ message: "Project deleted succesflly" });
}