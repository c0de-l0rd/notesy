import React from 'react';
import { NextResponse, NextRequest } from 'next/server';
import mongoose from 'mongoose';
import connectMongo from '@/utils/connectMongo';
import Note from '@/models/notesModel';

export async function POST(req:NextRequest, res:NextResponse) {


    try{
        console.log("connecting to Mongo....")
       await connectMongo()
       console.log("connected to Mongo")
    }
    catch(error){
        console.log("there was an error connecting to mongo", error)
        return NextResponse.json({message:error}, {status:500})
    }

    try{
        const {title, bodyText} = await req.json()
        console.log("creating a new note....")
        const note = await new Note({title:title, bodyText: bodyText})
        await note.save()
        console.log("note created successfully")
    }
    catch(error){
        console.log("an error occured while creating the note", error)
        return NextResponse.json({message: "an error occured while creating your note"}, {status: 500})
    } 
    finally{
        try {
            await mongoose.connection.close();
        } catch (error) {
            console.error("Error closing Mongoose connection:", error);
        }    }

    return NextResponse.json({message:"note created successfully"},{status: 200})

}
