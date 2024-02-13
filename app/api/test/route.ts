import connectMongo from "@/utils/connectMongo";
import {NextResponse, NextRequest } from "next/server";
import Note from "@/models/notesModel";
import mongoose from "mongoose";

export async function POST(req:NextRequest, res:NextResponse){

try{
    console.log("Connecting to mongoDB....")
    await connectMongo()
    console.log("Connected to mongoDB")
}
catch(e){
    console.log("there was an error connecting to mongoDB!", e)
}

try{
    const {title, bodyText} = await req.json()
    console.log("creating note....")
    const notes = await new Note({title:title, bodyText:bodyText})
    await notes.save()
    console.log("created note")
}
catch(error){
    console.log("there was an error:", error)
    return NextResponse.json({message:"an error occured"}, { status: 400 });

} finally{
    mongoose.connection.close();
}

   return NextResponse.json({
    message:"successful",
   },
   {status: 200})

}
