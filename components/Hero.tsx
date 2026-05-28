"use client";


import {
    Search,
    MapPin,
    BedDouble,
} from "lucide-react";

type Props = {
    citySearch: string;

    setCitySearch: React.Dispatch<
        React.SetStateAction<string>
    >;

    roomsSearch: string;

    setRoomsSearch: React.Dispatch<
        React.SetStateAction<string>
    >;
};
export default function Hero({
    citySearch,
    roomsSearch,
    setCitySearch,
    setRoomsSearch,
}: Props) {
    return (
        <section className="w-full bg-gradient-to-b from-blue-50 to-white py-24">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <h1 className="text-6xl font-extrabold text-slate-900 leading-tight">
                    הדרך החכמה
                    <span className="text-blue-600"> למצוא דירה</span>
                </h1>

                <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                    פלטפורמה מודרנית למציאת דירות בצורה פשוטה,
                    מהירה וחכמה יותר.
                </p>
                <div className="mt-12 bg-white shadow-2xl rounded-3xl p-6 flex flex-col lg:flex-row gap-4 items-center justify-between">
                    <div className="flex items-center gap-3 bg-gray-100 rounded-2xl px-5 py-4 w-full">

                        <MapPin className="text-blue-600" />
                        <input
                            type="text"
                            placeholder="עיר"
                            value={citySearch}
                            onChange={(e) => {

                                const value = e.target.value;

                                if (/^[\u0590-\u05FFa-zA-Z\s]*$/.test(value)) {
                                    setCitySearch(value);
                                }

                            }}
                            className="bg-transparent outline-none w-full"
                        />
                    </div>
                    <div className="flex items-center gap-3 bg-gray-100 rounded-2xl px-5 py-4 w-full">

                        <BedDouble className="text-blue-600" />

                        <input
                            type="text"
                            placeholder="מספר חדרים"
                            value={roomsSearch}
                            onChange={(e) => {

                                const value = e.target.value;

                                if (/^\d*$/.test(value)) {
                                    setRoomsSearch(value);
                                }

                            }}
                            className="bg-transparent outline-none w-full"
                        />
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-10 py-4 rounded-2xl flex items-center gap-2 font-semibold w-full lg:w-auto justify-center">

                        <Search />

                        חיפוש
                    </button>
                </div>
            </div>

        </section>
    )
}