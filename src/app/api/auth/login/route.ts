import { NextRequest, NextResponse } from "next/server";
import { Login } from "@/app/lib/firebase/FetchUser";
export async function POST(req: NextRequest) {
  const inputUser = await req.json();
  inputUser.nim = Number(inputUser.nim)
  const { status, statusCode, data } = await Login(inputUser);
  if (status) {
    return NextResponse.json({
      status,
      statusCode,
      message: "Login Successful",
      data,
    });
  }
  if (statusCode == 401) {
    return NextResponse.json({
      status,
      statusCode,
      message: "Invalid nim or password",
      data,
    });
  }
  return NextResponse.json({
    status,
    statusCode,
    message: "Error Server API",
    data,
  });
}
