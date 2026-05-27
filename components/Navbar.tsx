"use client";

import Image from "next/image";
import {
    House,
    Building2,
    CircleHelp,
} from "lucide-react";
type Props = {
    onApartmentsClick: () => void;
};
export default function Navbar({
    onApartmentsClick,
}: Props) {
    return (
        <nav className="flex items-center justify-between px-10 py-5 border-b bg-white">
            <div className="flex items-center gap-3">
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={250}
                    height={100}
                /> </div>
            <h3 className="text-3xl font-semibold text-gray-800">
                Find your next apartment easily!
            </h3>

            <div className="flex items-center gap-8 text-gray-700">

                <button className="flex items-center gap-2 hover:text-blue-600">
                    <House size={20} />
                    Home
                </button>

                <button
                    onClick={onApartmentsClick}
                    className="flex items-center gap-2"
                >
                    <Building2 size={20} />
                    Apartments
                </button>

                <button className="flex items-center gap-2 hover:text-blue-600">
                    <CircleHelp size={20} />
                    About
                </button>
            </div>
        </nav>
    );
}