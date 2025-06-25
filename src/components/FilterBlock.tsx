type Props = {
  onFilter: (filters: any) => void;
};

export default function FilterBlock({ onFilter }: Props) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="flex flex-col">
        <label
          htmlFor="location"
          className="mb-1 text-sm font-medium text-blue-700"
        >
          Location
        </label>
        <input
          id="location"
          type="text"
          placeholder="Search by Location"
          onChange={(e) => onFilter({ location: e.target.value })}
          className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-2 rounded-lg transition w-full outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="category"
          className="mb-1 text-sm font-medium text-blue-700"
        >
          Category
        </label>
        <select
          id="category"
          onChange={(e) => onFilter({ category: e.target.value })}
          className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-2 rounded-lg transition w-full outline-none bg-white"
        >
          <option value="">All Categories</option>
          <option value="Singer">Singer</option>
          <option value="Dancer">Dancer</option>
          <option value="Speaker">Speaker</option>
          <option value="DJ">DJ</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="feeRange"
          className="mb-1 text-sm font-medium text-blue-700"
        >
          Fee Range
        </label>
        <select
          id="feeRange"
          onChange={(e) => onFilter({ feeRange: e.target.value })}
          className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-2 rounded-lg transition w-full outline-none bg-white"
        >
          <option value="">All Fee Ranges</option>
          <option value="low">₹0 - ₹10,000</option>
          <option value="mid">₹10,001 - ₹20,000</option>
          <option value="high">₹20,001+</option>
        </select>
      </div>
    </div>
  );
}
