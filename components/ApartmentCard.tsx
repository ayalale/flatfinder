import Image from "next/image";
import Link from "next/link";

type Props = {
    id: number;

    title: string;
    city: string;
    price: number;
    rooms: number;
    image: string;

};

export default function ApartmentCard({
    id,
    title,
    city,
    price,
    rooms,
    image,


}: Props) {
    return (
        console.log("CARD ID:", id),
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
            <Image
                src={image}
                alt={title}
                width={400}
                height={250}
                className="rounded-t-3xl object-cover"
            />

            <div className="p-6">

                <h2 className="text-2xl font-bold text-slate-900">
                    {title}
                </h2>

                <p className="text-gray-500 mt-2">
                    {city}
                </p>

                <p className="text-gray-600 mt-2">
                    {rooms} חדרים
                </p>

                <p className="text-3xl font-bold text-blue-600 mt-4">
                    ₪{price.toLocaleString()}
                </p>
                <Link href={`/apartments/${id}`}>

                    <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl transition">

                        לפרטים

                    </button>
                </Link>
            </div>

        </div>
    );
}