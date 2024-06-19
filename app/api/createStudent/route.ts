import connectDB from "@/libs/mongoDb/mongoDb";
import validateEmail from "@/libs/validators/emailValidator";
import validateId from "@/libs/validators/idValidator";
import studentModel from "@/models/student";
import { NextResponse } from "next/server";
export const revalidate = 0; //must
export async function POST(req: Request) {
  try {
    await connectDB();
    const { firstName, lastName, emailId, mobileNumber, id, loggedIn, image, attended, attendence } = await req.json();

    if (firstName === undefined || emailId === undefined || mobileNumber === undefined) {
      return NextResponse.json({
        message: "Firstname,Emailid and mobileNumber Must Be Needed",
      });
    }
    else {
      if (
        firstName.length >= 3
      ) {
        try {
          await studentModel.create({
            firstName,
            lastName,
            image,
            id,
            emailId,
            attended,
            attendence,
            mobileNumber

          });
          return NextResponse.json({
            message: "created",
          });
        } catch (e) {
          return NextResponse.json({
            message: "somethingWrong",
          });
        }
      }

      else {
        if (firstName.length < 3) {
          return NextResponse.json({
            message: "nameMustBe3Characters",
          });
        }
        else if (!validateId(id)) {
          return NextResponse.json({
            message: "idMustBeAtleast4characters",
          });
        }

        else if (!validateEmail(emailId)) {
          return NextResponse.json({
            message: "invalidEmail",
          });
        }
        else {
          return NextResponse.json({
            message: "somethingWrong",
          });
        }
      }
    }
  } catch (e) {
    return NextResponse.json({
      message: "somethingWrong",
    });
  }
}
