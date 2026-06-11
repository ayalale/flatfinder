import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  request:Request,
  {params}:{params: Promise<{id: string}>}) {
  
}


export async function GET() {
  const apartments = await prisma.apartment.findMany();
  return NextResponse.json(apartments);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { title, city, price, rooms, image } = body;

    if (!title || !city || !price || !rooms) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const newApartment = await prisma.apartment.create({
      data: {
        title,
        city,
        price: Number(price),
        rooms: Number(rooms),
        image: image || "",
      },
    });

    return NextResponse.json(newApartment, { status: 201 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}