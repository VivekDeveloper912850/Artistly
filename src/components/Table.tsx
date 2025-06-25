type Artist = {
  id: string;
  name: string;
  category: string;
  location: string;
  feeRange: string;
};

type Props = {
  artists: Artist[];
};

export default function Table({ artists }: Props) {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className="min-w-full bg-white text-sm text-left">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Location</th>
            <th className="px-4 py-3">Fee</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {artists.map((artist) => (
            <tr key={artist.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-3 font-medium">{artist.name}</td>
              <td className="px-4 py-3">{artist.category}</td>
              <td className="px-4 py-3">{artist.location}</td>
              <td className="px-4 py-3">{artist.feeRange}</td>
              <td className="px-4 py-3">
                <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
