"use client";

import { useState, useEffect, useCallback } from "react";
import DramaCard from "../components/DramaCard";
import Loader from "../components/Loader";
import { Drama } from "@/interface/Drama";
import { MdSearch } from "react-icons/md";
import { getAIO, searchAIO } from "@/services/botApi";

const categories = [
  { title: "All", genre: "all", apiUrl: "/dramas/popular" },
  {
    title: "Romantic",
    genre: "Romance",
    atitle: "Popular",
    piUrl: "/dramas/romantic",
  },
  { title: "Fantasy", genre: "Fantasy", apiUrl: "/dramas/fantasy" },
  { title: "Top Rated", genre: "Sci-fi", apiUrl: "/dramas/top-rated" },
  { title: "Action", genre: "Action", apiUrl: "/dramas/action" },
  { title: "Comedy", genre: "Comedy", apiUrl: "/dramas/comedy" },
  { title: "Sci-fi", genre: "Sci-Fi", apiUrl: "/dramas/sci-fi" },
];

const Home = () => {
  const [dramas, setDramas] = useState<Drama[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeCategory, setActiveCategory] = useState<string>(
    categories[0].title
  );
  const [activeGenre, setActiveGenre] = useState<string>(categories[0].genre);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);

  const fetchDramas = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await getAIO(page, 20, "Drama", activeGenre);
      setDramas(response);
      setTotalItems(response.length);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [activeGenre, page]);

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

  const handleCategoryChange = (category: any) => {
    setActiveCategory(category.title);
    setActiveGenre(category.genre);
    setPage(1);
    setSearchTerm("");
  };

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePrevPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <main className="container mx-auto p-4 md:p-6 lg:p-8 max-w-screen-xl">
      <div className="flex justify-end md:justify-center lg:justify-center xl:justify-center mb-6">
        <div className="relative w-3/5 sm:w-2/3 md:w-full max-w-md">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            className="w-full p-2 mt-2 pl-12 border border-gray-300 rounded-lg bg-transparent shadow-sm focus:ring-2 focus:ring-blue-400"
          />
          <MdSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={24}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center mb-8 gap-4">
        {categories.map((category) => (
          <button
            key={category.title}
            className={`text-sm font-semibold px-4 py-2 rounded-lg shadow-md transition ${
              activeCategory === category.title
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {error ? (
          <div className="flex flex-col items-center text-center">
            <p className="text-red-500 mb-4">
              Error loading dramas. Please try again later.
            </p>
            <button
              onClick={() => fetchDramas()}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Try Again
            </button>
          </div>
        ) : loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dramas.length > 0 ? (
              dramas.map((drama) => (
                <DramaCard key={drama.shareId} drama={drama} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No dramas found.
              </p>
            )}
          </div>
        )}

        {totalItems >= 20 && (
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={handlePrevPage}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:bg-gray-400 transition"
            >
              Previous
            </button>
            <span className="px-4 py-2 text-gray-700">Page {page}</span>
            <button
              onClick={handleNextPage}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
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
