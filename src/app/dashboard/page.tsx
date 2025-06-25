'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Artist = {
  name: string;
  bio: string;
  category: string[] | string;
  languages: string[] | string;
  fee: string;
  location: string;
};

export default function Page() {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('artistSubmissions') || '[]');
    setArtists(stored);
  }, []);

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto py-10 px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 text-center">
          📊 Artist Dashboard
        </h2>

        {artists.length === 0 ? (
          <p className="text-center text-gray-500">No artist submissions yet.</p>
        ) : (
          <div className="overflow-x-auto bg-white shadow rounded-lg">
            {/* Desktop Table */}
            <table className="min-w-full text-sm text-left hidden md:table">
              <thead className="bg-blue-600 text-white text-xs sm:text-sm">
                <tr>
                  <th className="px-4 sm:px-6 py-3">Name</th>
                  <th className="px-4 sm:px-6 py-3">Category</th>
                  <th className="px-4 sm:px-6 py-3">Languages</th>
                  <th className="px-4 sm:px-6 py-3">Fee</th>
                  <th className="px-4 sm:px-6 py-3">Location</th>
                  <th className="px-4 sm:px-6 py-3">Bio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {artists.map((artist, index) => (
                  <tr key={index} className="hover:bg-blue-50">
                    <td className="px-4 sm:px-6 py-4 font-medium break-all">{artist.name}</td>
                    <td className="px-4 sm:px-6 py-4">
                      {Array.isArray(artist.category)
                        ? artist.category.join(', ')
                        : artist.category}
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      {Array.isArray(artist.languages)
                        ? artist.languages.join(', ')
                        : artist.languages}
                    </td>
                    <td className="px-4 sm:px-6 py-4">{artist.fee}</td>
                    <td className="px-4 sm:px-6 py-4">{artist.location}</td>
                    <td className="px-4 sm:px-6 py-4">{artist.bio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Mobile Card View */}
            <div className="md:hidden divide-y divide-gray-200">
              {artists.map((artist, index) => (
                <div key={index} className="p-4 flex flex-col gap-2 hover:bg-blue-50">
                  <div>
                    <span className="font-semibold text-blue-700">Name: </span>
                    <span className="break-all">{artist.name}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-700">Category: </span>
                    <span className="">{Array.isArray(artist.category) ? artist.category.join(', ') : artist.category}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-700">Languages: </span>
                    <span className="">{Array.isArray(artist.languages) ? artist.languages.join(', ') : artist.languages}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-700">Fee: </span>
                    <span className="">{artist.fee}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-700">Location: </span>
                    <span className="">{artist.location}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-700">Bio: </span>
                    <span className="">{artist.bio}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
