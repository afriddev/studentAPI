import * as mongoose from "mongoose";
import mongoDbUrl from "../credentials/credentials";
async function connectDB(){
    await mongoose.connect(mongoDbUrl)
    .then(
        ()=>{
        }
    )
    .catch((e)=>{
        console.log()
        console.log(e)
    })
}

export default connectDB