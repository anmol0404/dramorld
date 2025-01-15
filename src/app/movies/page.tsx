"use client";

import { useState, useEffect, useCallback } from "react";
import { Drama } from "@/interface/Drama";
import { MdSearch } from "react-icons/md";
import { getAIO, searchAIO } from "@/services/botApi";
import Loader from "@/components/Loader";
import DramaCard from "@/components/DramaCard";

const categories = [
  { title: "Popular", apiUrl: "/dramas/popular" },
  { title: "Romantic", apiUrl: "/dramas/romantic" },
  { title: "Fantasy", apiUrl: "/dramas/fantasy" },
  { title: "Top Rated", apiUrl: "/dramas/top-rated" },
  { title: "Action", apiUrl: "/dramas/action" },
  { title: "Comedy", apiUrl: "/dramas/comedy" },
  { title: "Sci-fi", apiUrl: "/dramas/sci-fi" },
];

const Home = () => {
  const [dramas, setDramas] = useState<Drama[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeCategory, setActiveCategory] = useState<string>(
    categories[0].title
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);

  const fetchDramas = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await getAIO(page, 20, "Movie", activeCategory);
      setDramas(response);
      setTotalItems(response.length);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [activeCategory, page]);

  const fetchSearchResults = useCallback(async (searchTerm: string) => {
    setLoading(true);
    setError(false);
    try {
      const response = await searchAIO({ title: searchTerm });
      setDramas(response);
      setTotalItems(response.length);
    } catch (error) {
      console.error("Error searching data:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const handler = setTimeout(() => {
        fetchSearchResults(searchTerm);
      }, 300);

      return () => {
        clearTimeout(handler);
      };
    } else {
      fetchDramas();
    }
  }, [searchTerm, fetchDramas, fetchSearchResults]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setPage(1);
    setSearchTerm("");
  };

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePrevPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <main className="container mx-auto p-4 md:p-6 lg:p-8">
      <div className="flex justify-center">
        <div className="mb-4 w-1/3 relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            className="w-full p-2 pl-10 border border-gray-300 rounded-lg bg-transparent"
          />
          <MdSearch
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={24}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center mb-6">
        {categories.map((category) => (
          <button
            key={category.title}
            className={`text-xs font-bold px-4 py-2 mx-2 my-3 rounded-lg ${
              activeCategory === category.title
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-900"
            }`}
            onClick={() => handleCategoryChange(category.title)}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-2">{activeCategory}</h2>
        {error ? (
          <div className="flex flex-col items-center">
            <p>Error loading dramas. Please try again later.</p>
            <button
              onClick={() => fetchDramas()}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Try Again
            </button>
          </div>
        ) : loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 overflow-y-auto max-h-[80vh]">
            {dramas.length > 0 ? (
              dramas.map((drama) => (
                <div key={drama.shareId} className="w-full h-full">
                  <DramaCard drama={drama} />
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No dramas found
              </p>
            )}
          </div>
        )}

        {totalItems >= 20 && (
          <div className="flex justify-center mt-4">
            <button
              onClick={handlePrevPage}
              disabled={page === 1}
              className="px-4 py-2 mx-2 bg-gray-200 text-gray-700 rounded-lg disabled:bg-gray-400"
            >
              Previous
            </button>
            <span className="px-4 py-2 mx-2 text-gray-300">Page {page}</span>
            <button
              onClick={handleNextPage}
              className="px-4 py-2 mx-2 bg-gray-200 text-gray-700 rounded-lg"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
