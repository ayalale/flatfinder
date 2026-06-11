"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewApartmentPage() {
    const [form, setForm] = useState({
        title: "",
        city: "",
        price: "",
        rooms: "",
        image: "",
    });


    const router = useRouter();

    const handleSubmit = async () => {
        try {
            console.log("CLICKED");

            const res = await fetch("/api/apartments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: form.title,
                    city: form.city,
                    price: Number(form.price),
                    rooms: Number(form.rooms),
                    image: form.image,
                }),
            });

            const data = await res.json();

            console.log("STATUS:", res.status);
            console.log("DATA:", data);

            if (!res.ok) {
                alert(data.error || "Failed to create apartment");
                return;
            }

            setForm({
                title: "",
                city: "",
                price: "",
                rooms: "",
                image: "",
            });

            router.push("/");

            alert("Apartment created!");
            router.push("/");
        } catch (err) {
            console.error("ERROR:", err);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="max-w-xl mx-auto p-10">
            <h1 className="text-2xl font-bold mb-6">Add Apartment</h1>

            <input name="title" placeholder="Title" onChange={handleChange} className="border p-3 rounded w-full mb-3"
            />
            <input name="city" placeholder="City" onChange={handleChange} className="border p-3 rounded w-full mb-3"
            />
            <input name="price" placeholder="Price" onChange={handleChange} className="border p-3 rounded w-full mb-3"
            />
            <input name="rooms" placeholder="Rooms" onChange={handleChange} className="border p-3 rounded w-full mb-3"
            />
            <input name="image" placeholder="Image URL" onChange={handleChange} className="border p-3 rounded w-full mb-3"
            />
            <button
                onClick={() => {
                    console.log("BUTTON CLICKED");
                    handleSubmit();
                }} className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4"
            >
                Add Apartment
            </button>
        </div>



    );
}