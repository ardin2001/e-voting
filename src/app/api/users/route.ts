import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { PostUser } from "@/app/lib/firebase/FetchUser";
import { GetAllUser } from "@/app/lib/firebase/FetchUser";

export async function GET(req: NextRequest) {
  const { status, data, statusCode } = await GetAllUser();
  if (status) {
    return NextResponse.json({
      status,
      statusCode,
      message: "Successfully get all user data",
      data,
    });
  }
  return NextResponse.json({
    status,
    statusCode,
    message: "Error Server API",
    data: null,
  });
}

export async function POST(req: NextRequest) {
  const inputUser = await req.json();
  const id = uuidv4();
  const random = Math.random();
  inputUser.password = id[0] + id + random + id[id.length - 2];
  inputUser.role = "user";
  inputUser.nim = Number(inputUser.nim);
  inputUser.verified = false;

  const { status, statusCode } = await PostUser(inputUser);
  if (status) {
    return NextResponse.json({
      status,
      statusCode,
      message: "Successfully post user data",
      data: {
        password: inputUser.password,
      },
    });
  } else {
    if (statusCode == 401) {
      return NextResponse.json({
        status,
        statusCode,
        message: "Already user data",
        data: null,
      });
    } else {
      return NextResponse.json({
        status,
        statusCode,
        message: "Error Server API",
        data: null,
      });
    }
  }
}
