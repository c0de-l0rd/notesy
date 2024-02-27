import { NextRequest, NextResponse } from 'next/server'
import connectMongo from '@/utils/connectMongo'
import mongoose from 'mongoose'
import Note from '@/models/notesModel'

export async function POST(req:NextRequest) {

    try {
        console.log("connecting to mongo....")
        await connectMongo()
        console.log("connected successfuly to mongo")
    } catch (error) {
        console.log("error occured while connectig to mongo:", error)
        return NextResponse.json(`error occured while connectig to mongo: ${error}`,{status: 404})
    }

    try {
        const {id} = await req.json()

        const result = await Note.findOneAndDelete({_id:id})
        if(!result){
            return NextResponse.json({message:"something went wrong"}, {status: 404})
        }

        return NextResponse.json({message:"note deleted successfully"},{status: 200})
    } catch (error) {
        console.log("error occured while deleting the note:", error)
        return NextResponse.json(`error occured while deleting the note: ${error}`,{status: 404})
    } 
    finally{
        try {
            mongoose.connection.close()
        } catch (error) {
            console.log("an error occured while closing mongo connection",error)
        }
    }
}

