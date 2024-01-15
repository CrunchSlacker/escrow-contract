import { NextResponse } from "next/server";

require("dotenv").config();
const { MongoClient } = require("mongodb");

const url = process.env.MONGODB_URI;
const client = new MongoClient(url);

export async function POST(req) {
  const document = await req.json();
  try {
    await client.connect();
    const db = client.db("escrow");

    await db.collection("depositors").insertOne(document);

    return NextResponse.json(
      "Success: " + document.depositor + " added to depositors collection.",
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message });
  } finally {
    await client.close();
  }
}
