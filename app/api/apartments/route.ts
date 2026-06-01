import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const apartments = await prisma.apartment.findMany();

  return NextResponse.json(apartments);
}