"use client";

import { useState } from "react";
import ApartmentCard from "@/components/ApartmentCard";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
export default function Home() {

  const [showApartments, setShowApartments] = useState(false);
  return (
    <>
      <Navbar onApartmentsClick={() =>
        setShowApartments(!showApartments)} />
      <Hero />
      <main className="p-10">
        {showApartments && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <ApartmentCard
              title="דירת 3 חדרים"
              city="ירושלים"
              price={3000000}
            />

            <ApartmentCard
              title="דירת 5 חדרים"
              city="בית שמש"
              price={2500000}
            />

            <ApartmentCard
              title="דופלקס 6 חדרים"
              city="אחיסמך"
              price={4000000}
            />

          </div>
        )}
      </main >  </>
  );
}


