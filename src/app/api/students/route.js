import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { noorDb } from "@/lib/db";
import { Student } from "@/lib/model/student";
import { corsMiddleware } from "@/lib/corsMiddleware";

const handler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      await mongoose.connect(noorDb);
      const data = await Student.find();
      console.log(data);
      return res.status(200).json({ result: data });
    
    case 'POST':
      const payload = await req.json();
      await mongoose.connect(noorDb);
      let student = new Student(payload);
      const result = await student.save();
      return res.status(200).json({ result, success: true });
    
    case 'DELETE':
      const { id } = await req.json();
      await mongoose.connect(noorDb);
      const deleteResult = await Student.findByIdAndDelete(id);
      if (!deleteResult) {
        return res.status(404).json({ success: false, message: "Student not found" });
      }
      return res.status(200).json({ success: true, message: "Student deleted" });
    
    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default corsMiddleware(handler);
