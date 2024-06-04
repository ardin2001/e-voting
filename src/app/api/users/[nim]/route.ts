import { NextRequest, NextResponse } from "next/server";
import { GetUserByNim,DeleteUser, UpdateUser } from "@/app/lib/firebase/FetchUser";
export async function GET(req: NextRequest, {params} : { params: { nim: string } }) {
  const nim = Number(params.nim)
  const {status,data} = await GetUserByNim(nim)
  console.log(status,data)
  if(status){
    return NextResponse.json({
      status: true,
      statusCode: 200,
      message: "Successfully get detail user data",
      data: data
    });
  }
  return NextResponse.json({
    status: false,
    statusCode: 401,
    message: "Failed get detail user data",
    data
  });
}

export async function PUT(req: NextRequest,{params} : { params: { nim: string } }) {
  const inputUser = await req.json();
  const {status, statusCode} : any = await UpdateUser({ id: params.nim, dataUpdate: inputUser });
  if(status){
    return NextResponse.json({
      status,
      statusCode,
      message: "Successfully put user data",
      data: null,
    });
  }

  if(statusCode == 401){
    return NextResponse.json({
      status,
      statusCode,
      message: "User not found",
      data: null,
    });
  }

  return NextResponse.json({
    status,
    statusCode,
    message: "Failed update user data",
    data: null,
  });
}

export async function DELETE(req: NextRequest,{params} : { params: { nim: string } }) {
  const {status,statusCode} = await DeleteUser(params.nim);
    if(status){
      return NextResponse.json({
        status,
        statusCode,
        message: "Successfully delete user data",
        data: null,
      });
    }
    if(statusCode == 401){
      return NextResponse.json({
        status,
        statusCode,
        message: "User not found",
        data: null,
      });
    }
    return NextResponse.json({
      status,
      statusCode,
      message: "Error Server API",
      data: null,
    });
  }