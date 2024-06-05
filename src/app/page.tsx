"use client";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from "./components/Navbar";

export default function Home() {
  const { data: session } = useSession();
  return (
    <main className="">
      <Navbar />
      <div className="grid justify-center mt-10">
        <p>E-voting App</p>

        {session == undefined ? (
          <button className="px-4 py-1 bg-blue-500 rounded-lg text-white font-semibold" onClick={() => signIn()}>Login</button>
        ) : (
          <button className="px-4 py-1 bg-blue-500 rounded-lg text-white font-semibold" onClick={() => signOut()}>Logout</button>
        )}
      </div>
    </main>
  );
}
