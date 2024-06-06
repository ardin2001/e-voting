"use client";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from 'react'

function Login() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [message, setMessage] = useState("");
    const callBack = searchParams.get('callbackUrl') || 'http://localhost:3000'
    console.log('callBack :', callBack)
    const HandlerLogin = async (event: any) => {
        event.preventDefault();
        const response: any = await signIn("credentials", {
            nim: event.target.nim.value,
            password: event.target.password.value,
            redirect: false,
            callbackUrl: callBack
        });

        if (response.ok) {
            setMessage("Login success")
            router.push(callBack)
        } else {
            setMessage("Wrong nim or password")
        }
    }
    return (
        <div className="lg:grid lg:h-screen">
            <div className="grid my-5 mx-8 gap-8 lg:grid-cols-2 lg:shadow-custom1 lg:rounded-2xl lg:px-10 lg:bg-white">
                <div className="description grid gap-4 lg:my-auto lg:flex lg:flex-col lg:gap-5">
                    <h3 className="text-secondary font-bold text-3xl text-center mt-6 lg:mt-0">E-Voting App</h3>
                    <div className="image">
                        <Image src={"/icon.png"} alt="login" width={5000} height={5000} className="w-72 sm:w-96 m-auto" />
                    </div>
                    <p className="text-secondary font-medium text-justify lg:text-center lg:px-10 xl:px-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugit cumque repudiandae! Dolorum ad doloremque, nam maxime eligendi sed ut. Voluptates quibusdam suscipit aut?</p>
                </div>
                <div className="lg:my-auto lg:mx-auto lg:w-3/5">
                    <h3 className="text-secondary font-bold text-2xl text-center mb-5">Login</h3>
                    <form className="form grid gap-5" onSubmit={HandlerLogin}>
                        <div className="nim">
                            <input type="text" id="nim" className="outline-none border-b-2 border-secondary px-1 w-full text-secondary bg-quinary lg:bg-white" placeholder="202410102020" />
                        </div>
                        <div className="password">
                            <input type="password" id="password" className="outline-none border-b-2 border-secondary px-1 w-full text-secondary bg-quinary lg:bg-white" placeholder="********" />
                        </div>
                        <button type="submit" className="bg-secondary py-1 text-white font-semibold rounded-md">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export function Searchbar() {
    return (
        // You could have a loading skeleton as the `fallback` too
        <Suspense>
            <Login />
        </Suspense>
    )
}