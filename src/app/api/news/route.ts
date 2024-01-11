import db from "@/app/network/db";
import { exportTraceState } from "next/dist/trace";
import { NextRequest } from "next/server";

export async function GET() {
    const conn = await db;
    const [rows, fields] = await conn.query("SELECT * FROM news");
    
    return Response.json({rows})
}

export async function POST(req: NextRequest) {
    const conn = await db;
    const { title, detail, author } = await req.json();

    const [result, fields] = await conn.query(`INSERT INTO news (TITLE, DETAIL, AUTHOR, IMAGE) VALUES ("${title}", "${detail}", "${author}", "image")`);
    
    return Response.json({result})
}