import { NextResponse } from "next/server";

require("dotenv").config();
const { MongoClient } = require("mongodb");

const url = process.env.MONGODB_URI;
const client = new MongoClient(url);

export async function POST(req) {
  const document = await req.json();
  console.log(document.depositor);
  console.log(document.contractInformation.arbiter);
  try {
    await client.connect();
    const db = client.db("escrow");

    await db
      .collection("depositors")
      .updateOne(
        { depositor: document.depositor },
        {
          $push: {
            contracts: {
              contract: document.contractInformation.contract,
              beneficiary: document.contractInformation.beneficiary,
              arbiter: document.contractInformation.arbiter,
            },
          },
        }
      );
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
