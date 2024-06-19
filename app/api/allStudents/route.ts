import connectDB from "@/libs/mongoDb/mongoDb";
import studentModel from "@/models/student";
import { NextResponse } from "next/server";
export const revalidate = 0; //must
export async function GET() {
    try {
        await connectDB()
        try {
            const students = await studentModel.find({})
            if (students.length > 0) {
                return NextResponse.json({
                    message: "success",
                    studnets: students
                })
            }
            else {
                return NextResponse.json({
                    message: "noStudentsFound"
                })

            }

        } catch (e) {
            return NextResponse.json({
                message: e
            })
        }

    }
    catch (e) {
        return NextResponse.json({
            message: e
        })
    }

}