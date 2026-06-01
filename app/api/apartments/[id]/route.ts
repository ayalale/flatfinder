import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const apartment = await prisma.apartment.findUnique({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json(apartment);
}