'use client'

import { useState } from "react";
import artistsData from "@/data/artists.json";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArtistCard from "@/components/ArtistCard";
import FilterBlock from "@/components/FilterBlock";

export default function ArtistListPage() {
  const [filters, setFilters] = useState({});
  const [filteredArtists, setFilteredArtists] = useState(artistsData);

  const handleFilter = (newFilter: any) => {
    const updatedFilters = { ...filters, ...newFilter };
    setFilters(updatedFilters);

    let results = artistsData.filter((artist) => {
      const matchCategory = updatedFilters.category ? artist.category === updatedFilters.category : true;
      const matchLocation = updatedFilters.location
        ? artist.location.toLowerCase().includes(updatedFilters.location.toLowerCase())
        : true;
      const matchFee =
        updatedFilters.feeRange === "low"
          ? artist.feeRange.includes("₹5,000") || artist.feeRange.includes("₹10,000")
          : updatedFilters.feeRange === "mid"
          ? artist.feeRange.includes("₹15,000") || artist.feeRange.includes("₹20,000")
          : updatedFilters.feeRange === "high"
          ? artist.feeRange.includes("₹25,000") || artist.feeRange.includes("₹30,000")
          : true;

      return matchCategory && matchLocation && matchFee;
    });

    setFilteredArtists(results);
  };

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Find Performing Artists</h2>
        <FilterBlock onFilter={handleFilter} />

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArtists.map((artist) => (
            <ArtistCard
  name={artist.name}
  category={Array.isArray(artist.category) ? artist.category.join(', ') : artist.category}
  location={artist.location}
  feeRange={artist.feeRange}
  image={artist.image}
/>

          ))}
        </div>

        {filteredArtists.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No artists found with selected filters.</p>
        )}
      </div>
      <Footer />
    </>
  );
}
