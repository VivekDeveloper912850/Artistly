type ArtistProps = {
  name: string;
  category: string;
  location: string;
  feeRange: string;
  image: string;
};

export default function ArtistCard({ name, category, location, feeRange, image }: ArtistProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <img src={image} alt={name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-blue-700">{name}</h3>
        <p className="text-sm text-gray-500">{category} • {location}</p>
        <p className="text-sm mt-1 text-green-700 font-semibold">{feeRange}</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full">
          Ask for Quote
        </button>
      </div>
    </div>
  );
}
