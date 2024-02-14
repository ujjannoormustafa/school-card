import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { noorDb } from "@/lib/db";
import { Student } from "@/lib/model/student";

export async function GET(reqest) {

    await mongoose.connect(noorDb)
   
    const data =  await Student.find()
    console.log(data)
    return NextResponse.json({result: data})
}


export async function POST(reqest) {
    const payload = await reqest.json()
    
    await mongoose.connect(noorDb);
    let sutdent = new Student(payload)
    
    const result = await sutdent.save()
    return NextResponse.json({result, success:true})
}