import connectDb from "@/libs/dbConnect";
import Project from "@/models/project";
import { NextRequest, NextResponse } from "next/server";

type Project = {
    _id: string;
    title: string;
    description: string;
    _v: string;
  };

export async function POST(request: Request) {
    const { title, description } = await request.json();
    await connectDb();
    const newProject = new Project({ title, description })
    try {
        await newProject.save();
    } catch (error) {
        console.log("Error occured : " + error);
    }
    return NextResponse.json({ message: "New project added succesfully"}, {status: 201 });
}

export async function GET() {
    await connectDb();
    const projects: Project[] = await Project.find();
    return NextResponse.json(projects, {status:200})
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    await connectDb();
    await Project.findByIdAndDelete(id);
    return NextResponse.json({ message: "Project deleted succesflly" }, {status:200});
}