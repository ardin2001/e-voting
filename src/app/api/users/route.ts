import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  return NextResponse.json({
    status: true,
    statusCode: 200,
    message: "Successfully get all user data",
    data: [],
  });
}

export async function POST(req: NextRequest) {
  return NextResponse.json({
    status: true,
    statusCode: 200,
    message: "Successfully post user data",
    data: [],
  });
}
