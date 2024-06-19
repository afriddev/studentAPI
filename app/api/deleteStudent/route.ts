import userLogs from "@/data/userLogs";
import connectDB from "@/libs/mongoDb/mongoDb";
import studentModel from "@/models/student";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    const { emailId } = await req.json()

    try {
        await connectDB()
        const studentDetails = await studentModel.find({ emailId })
        if (studentDetails?.length > 0  ) {
            await studentModel.deleteOne({ emailId: emailId })
            return NextResponse.json({
                message: "success"
            })

        }
        else {
            return NextResponse.json({
                message: "invalidEmail"
            })
        }
    }
    catch {
        return NextResponse.json({
            message: "somethingWrong"
        })
    }

}