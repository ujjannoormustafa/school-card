// pages/api/students.js

import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import { noorDb } from '@/lib/db';
import { Student } from '@/lib/model/student';

// CORS middleware function
const allowCors = fn => async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Authorization, Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    return await fn(req, res);
};

// Example GET handler
export async function GET(req, res) {
    await mongoose.connect(noorDb);

    try {
        const data = await Student.find();
        return NextResponse.json({ result: data });
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, 500);
    } finally {
        await mongoose.disconnect();
    }
}

// Example POST handler
export async function POST(req, res) {
    const payload = await req.body;

    await mongoose.connect(noorDb);

    try {
        let student = new Student(payload);
        const result = await student.save();
        return NextResponse.json({ result, success: true });
    } catch (error) {
        console.error('Error saving student:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, 500);
    } finally {
        await mongoose.disconnect();
    }
}

// Apply CORS middleware to all API handlers
export default allowCors((req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            return GET(req, res);
        case 'POST':
            return POST(req, res);
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
});
