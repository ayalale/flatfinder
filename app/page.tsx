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

  const [loading, setLoading] =
    useState(false);
  const handleSearch = () => {

    setLoading(true);

    setTimeout(() => {

      setLoading(false);
      setShowApartments(true);

    }, 1000);

  };

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
        handleSearch={handleSearch}

      />      <main className="p-10">
        {loading ? (
          <div className="text-center py-20 text-2xl font-bold text-blue-600">
            טוען דירות...
          </div>
        ) : (
          showApartments && (

            <>

              {filteredApartments.length === 0 ? (

                <div className="text-center py-20">

                  <h2 className="text-3xl font-bold text-gray-700">
                    לא נמצאו דירות
                  </h2>

                  <p className="text-gray-500 mt-3">
                    נסי לשנות את החיפוש
                  </p>

                </div>

              ) : (

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                  {filteredApartments.map((apartment) => (
                    <ApartmentCard
                      key={apartment.id}
                      title={apartment.title}
                      city={apartment.city}
                      price={apartment.price}
                      rooms={apartment.rooms}
                      image={apartment.image}
                    />
                  ))}

                </div>

              )}

            </>

          ))}
      </main >  </>
  );
}


