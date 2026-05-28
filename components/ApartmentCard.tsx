type Props = {
    title: string;
    city: string;
    price: number;
};

export default function ApartmentCard({
    title,
    city,
    price,
}: Props) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 border">
            <h2 className="text-2xl font-bold mb-2">
                {title}
            </h2>

            <p className="text-gray-600 mb-4">
                {city}
            </p>

            <p className="text-blue-400 text-xl font-bold">
                ₪{price.toLocaleString()}
            </p>
        </div>
    );
}