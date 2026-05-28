"use client";

import { useState } from "react";
import ApartmentCard from "@/components/ApartmentCard";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { apartments } from "@/data/apartments";

export default function Home() {

  const [showApartments, setShowApartments] = useState(false);

const [citySearch, setCitySearch] =
  useState("");

const [roomsSearch, setRoomsSearch] =
  useState("");
const filteredApartments = apartments.filter(
  (apartment) => {

    const matchesCity =
      citySearch === "" ||
      apartment.city.includes(citySearch);

    const matchesRooms =
      roomsSearch === "" ||
      apartment.rooms
        .toString()
        .includes(roomsSearch);

    return matchesCity && matchesRooms;
  }
);
  return (
    <>
      <Navbar onApartmentsClick={() =>
        setShowApartments(true)} />
<Hero
  citySearch={citySearch}
  setCitySearch={setCitySearch}
  roomsSearch={roomsSearch}
  setRoomsSearch={setRoomsSearch}
/>      <main className="p-10">
        {showApartments && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredApartments.map((apartment) => (
              <ApartmentCard
                key={apartment.id}
                title={apartment.title}
                city={apartment.city}
                price={apartment.price}
              />
            ))}
          </div>
        )}
      </main >  </>
  );
}


