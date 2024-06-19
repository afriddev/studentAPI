import connectDB from "@/libs/mongoDb/mongoDb";
import studentModel from "@/models/student";
import { NextResponse } from "next/server";
export const revalidate = 0; //must
export async function POST(req: Request) {
    try {
        await connectDB()
        const { email } = await req.json()
        try {
            const data = await studentModel.findOne({ email: email })
            if (data.length == 1) {
                return NextResponse.json({
                    message: "success",
                    data: data
                })
            }
            else {
                return NextResponse.json({
                    message: "invalidEmail"
                })
            }
        }
        catch (e) {
            return NextResponse.json({
                message:"serverError"
            })
        }
    }
    catch (e) {

        return NextResponse.json({
            message:"somethingWrong"
        })
    }
}
