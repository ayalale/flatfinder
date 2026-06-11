
type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ApartmentPage({ params }: Props) {
  const { id } = await params;

  console.log("🔎 ID:", id);



  const res = await fetch(
    `http://localhost:3000/api/apartments/${id}`,
    { cache: "no-store" }
  );

  console.log("📡 STATUS:", res.status);

  if (!res.ok) {
    return <div>Apartment not found</div>;
  }

  const apartment = await res.json();

  return (
    <div className="max-w-4xl mx-auto p-10">
      <img
        src={apartment.image || "/placeholder.jpg"}
        className="w-full h-96 object-cover rounded-3xl"
      />

      <h1 className="text-4xl font-bold mt-6">
        {apartment.title}
      </h1>

      <p>{apartment.city}</p>

      <p>₪{apartment.price}</p>

      <p>{apartment.rooms} חדרים</p>
    </div>
  );
}