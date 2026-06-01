import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.apartment.createMany({
    data: [
      {
        title: "דירת 3 חדרים",
        city: "ירושלים",
        price: 3200000,
        rooms: 3,
        image: "/apartments/apartment1.jpg",
      },
      {
        title: "פנטהאוז",
        city: "בית שמש",
        price: 4500000,
        rooms: 5,
        image: "/apartments/apartment2.jpg",
      },
      {
        title: "דירת גן",
        city: "מודיעין",
        price: 3900000,
        rooms: 4,
        image: "/apartments/apartment3.jpg",
      },
    ],
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());