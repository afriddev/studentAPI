import mongoose, { Schema, model, models } from "mongoose";

const student = new Schema({
    id: {
        type: String,
        required: true,
        immutable: true
    },
    image: {
        type: String,
        default: "",
        required: false
    },
    firstName: {
        type: String,
        minLength: 3,
        required: true
    },

    lastName: {
        type: String,
        default:"-",
        required:false

    },
    emailId: {
        type: String,
        immutable: true,
        required: true
    },
    attended: {
        type: Boolean,
        default: true,
        required: false

    },
    attendence: {
        type: Number,
        default: 45,
        min: 30,
        max: 100,
        required: false
    },
    mobileNumber: {
        type: Number,
        default: null,
        length: 10
    },



})

const studentModel = models.students || mongoose.model("students", student)
export default studentModel
