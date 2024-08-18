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

    await db.collection("depositors").findOneAndUpdate(
      { depositor: document.depositor },
      {
        $pull: {
          contracts: { "contract.target": document.contractAddress },
        },
      }
    );

    return NextResponse.json({ status: 200 });
  } catch (err) {
    return NextResponse.json({ err });
  }
}
