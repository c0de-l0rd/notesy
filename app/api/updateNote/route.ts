import { NextResponse, NextRequest } from "next/server";
import mongoose from "mongoose";
import connectMongo from "@/utils/connectMongo";
import Note from "@/models/notesModel";


export async function POST(req:NextRequest, res:NextResponse){

    try {
        console.log("conncting to mongo....")
       await connectMongo()
        console.log("connected to mongo")
    } catch (error) {
        console.log("there was an error:",error)
        return NextResponse.json({message:error},{status:400})
    }

    try{
        console.log("finding document....")
        const {docId, bodyText} = await req.json()
       const result = await Note.findOneAndUpdate({_id:docId}, { bodyText: bodyText }, {new:true});

            if (result) {
                console.log("document updated successfuly", result)
                return NextResponse.json({message: "document updated successfuly"},{status:200})
            } else {
                return NextResponse.json({message:"No document fount"},{status:400})
            }
        
        
} catch(error){
    console.log("an error has occured:", error)
   return NextResponse.json({message:error},{status:400})
} finally{
    mongoose.connection.close()
}


}