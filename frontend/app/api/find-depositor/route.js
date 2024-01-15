import { NextResponse } from "next/server";

require("dotenv").config();
const { MongoClient } = require("mongodb");

const url = process.env.MONGODB_URI;
const client = new MongoClient(url);

export async function POST(req) {
  const depositor = await req.json();
  try {
    await client.connect();
    const db = client.db("escrow");

    const foundDocument = await db
      .collection("depositors")
      .findOne({ depositor: depositor });
    return NextResponse.json(foundDocument, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  } finally {
    await client.close();
  }
}
