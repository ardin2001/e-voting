import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest, {params} : { params: { id: string } }) {
  return NextResponse.json({
    status: true,
    statusCode: 200,
    message: "Successfully get detail user data id : " + params.id,
    data: [],
  });
}

export async function PUT(req: NextRequest,{params} : { params: { id: string } }) {
  return NextResponse.json({
    status: true,
    statusCode: 200,
    message: "Successfully put user data id : " + params.id,
    data: [],
  });
}

export async function DELETE(req: NextRequest,{params} : { params: { id: string } }) {
    return NextResponse.json({
      status: true,
      statusCode: 200,
      message: "Successfully delete user data id : " + params.id,
      data: [],
    });
  }