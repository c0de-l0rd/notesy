import connectMongo from "@/utils/connectMongo";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import Note from "@/models/notesModel";

export async function POST(req:NextRequest, res:NextResponse) {
    
    try {
        console.log("conncting to mongo....")
       await connectMongo()
        console.log("connected to mongo")
    } catch (error) {
        console.log("there was an error:",error)
        return NextResponse.json({message:error},{status:400})
    }

    try{
        console.log("fetching data....")
        const data = await Note.find()
        console.log("data fetched")
            // if(err){
            //     console.log("an error has occured")
            //     return NextResponse.json({message:err},{status:500})
            // }
            if(data.length === 0){
                console.log("no data")
                return NextResponse.json({message:"you do not have any notes"}, {status:404})
            }
            else{
                return NextResponse.json({data:data}, {status:200})
            }
        
        
} catch(error){
    console.log("an error has occured:", error)
   return NextResponse.json({message:error},{status:400})
} finally{
    mongoose.connection.close()
}

// return NextResponse.json({message:'error'},{status:400})

}