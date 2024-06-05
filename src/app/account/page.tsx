"use client";
import { useSession,} from "next-auth/react"
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="grid justify-center mt-10">
        <p>Account Page</p>
      </div>
    </main>
  );
}
