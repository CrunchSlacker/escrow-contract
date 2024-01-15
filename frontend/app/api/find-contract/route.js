require("dotenv").config();

import { NextResponse } from "next/server";
const { MongoClient } = require("mongodb");

const url = process.env.MONGODB_URI;
const client = new MongoClient(url);

export async function GET(req) {
  const url = await req.url;
  const depositorAddress = url.split("=")[1].toLowerCase();

  try {
    await client.connect();
    const db = client.db("escrow");

    const contract = await db
      .collection("depositors")
      .findOne({ depositor: depositorAddress });
    console.log(contract);
    return NextResponse.json(contract, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  } finally {
    await client.close();
  }
}
