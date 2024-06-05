"use client";
import UseStatus from "../hooks/useStatus";
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
    const [status,setStatus] : any = UseStatus();

    return (
        <main className="">
            <div className="bg-white grid md:grid-flow-col md:grid-cols-3 shadow-md md:items-center">
                <div className="grid grid-flow-col justify-between w-89/100 mx-auto py-2.5 md:col-span-2">
                    <h3 className="text-secondary text-xl font-semibold">E-voting App</h3>
                    <IoMdMenu className="text-2xl text-secondary md:hidden" onClick={setStatus} />
                </div>
                <div className={`${status ? "block" : "hidden"} md:block url w-89/100 text-secondary mx-auto text-center`}>
                    <ul className="grid gap-3 pt-2 pb-3 md:grid-flow-col">
                        <li className="font-semibold hover:font-bold">Home</li>
                        <li className="font-semibold hover:font-bold">About</li>
                        <li className="font-semibold hover:font-bold">Info</li>
                        <li className="font-semibold hover:font-bold">Contact</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
