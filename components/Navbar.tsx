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
        <nav className="w-full sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">

                <div className="flex items-center gap-6 text-gray-700">

                    <button className="flex items-center gap-2 hover:text-blue-600 transition">

                        <House size={18} />

                        <span>עמוד הבית</span>

                    </button>

                    <button
                        onClick={onApartmentsClick}
                        className="flex items-center gap-2 hover:text-blue-600 transition"
                    >

                        <Building2 size={18} />

                        <span>דירות</span>

                    </button>

                    <button className="flex items-center gap-2 hover:text-blue-600 transition">

                        <CircleHelp size={18} />

                        <span>אודות</span>

                    </button>

                </div>

                <div className="hidden md:block">

                </div>

                <div className="flex items-center gap-3">

                    <div className="text-right">



                    </div>

                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={180}
                        height={30}
                        priority
                    />

                </div>

            </div>
        </nav>

    );
}
