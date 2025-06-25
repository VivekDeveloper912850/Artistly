import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import categories from "@/data/categories.json";

export default function HomePage() {
  return (
    <>
      <Header />

      <section className="text-center py-12 px-4 bg-blue-50">
        <h2 className="text-4xl font-bold mb-4">Book Your Favorite Performers</h2>
        <p className="text-gray-600 mb-6">Connecting Event Planners with Top Artists</p>
        <a href="/artists" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Explore Artists
        </a>
      </section>

      <section className="py-10 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center">Explore Categories</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.name} name={cat.name} image={cat.image} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
