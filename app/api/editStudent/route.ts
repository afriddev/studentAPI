import connectDB from "@/libs/mongoDb/mongoDb"
import studentModel from "@/models/student"
import { NextResponse } from "next/server"

export async function POST(req: Request) {

    const { emailId, firstName, lastName, mobileNumber } = await req.json()


    if (mobileNumber && firstName && lastName && emailId) {
        try {
            await connectDB()


            const studentDatils = await studentModel.find({ emailId })
            console.log(studentDatils)
            if (studentDatils?.length > 0) {

                await studentModel.updateOne({
                    emailId: emailId
                }, {
                    $set: { firstName,lastName,mobileNumber }
                })
                
               

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
                message: "soemthingWrong"
            })
        }
    }
    else {
        return NextResponse.json({
            message: "invalidFields"
        })
    }

}