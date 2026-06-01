type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ApartmentPage({
  params,
}: Props) {
  const { id } = await params;

  const res = await fetch(
    `http://localhost:3000/api/apartments/${id}`,
    {
      cache: "no-store",
    }
  );

  const apartment = await res.json();

  return (
    <div className="max-w-4xl mx-auto p-10">
      <img
        src={apartment.image}
        alt={apartment.title}
        className="w-full h-96 object-cover rounded-3xl"
      />

      <h1 className="text-4xl font-bold mt-6">
        {apartment.title}
      </h1>

      <p className="text-xl text-gray-600 mt-2">
        {apartment.city}
      </p>

      <p className="text-2xl font-bold text-blue-600 mt-4">
        ₪{apartment.price.toLocaleString()}
      </p>

      <p className="mt-2">
        {apartment.rooms} חדרים
      </p>
    </div>
  );
}