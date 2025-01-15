"use client";

import { useState, useEffect } from "react";

import { fetchDramas, fetchMovies } from "@/services/api";
import { Drama } from "@/interface/Drama";
import Loader from "@/components/Loader";
import SeriesCard from "@/components/DramaCard";

const categories = [
  { title: "Popular", apiUrl: "/movies/popular" },
  { title: "Romantic", apiUrl: "/movies/romantic" },
  { title: "Fantasy", apiUrl: "/movies/fantasy" },
  { title: "Top Rated", apiUrl: "/movies/top-rated" },
  { title: "Action", apiUrl: "/movies/action" },
  { title: "Comedy", apiUrl: "/movies/comedy" },
  { title: "Sci-fi", apiUrl: "/movies/sci-fi" },
];

const Home = () => {
  const [movies, setmovies] = useState<{ [key: string]: Drama[] }>({});
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(categories[0].title);

  // useEffect(() => {
  //   const fetch = async () => {
  //     const moviesData = await Promise.all(
  //       categories.map(async (category) => {
  //         const response = await fetchDramas();
  //         const data = response;
  //         return { [category.title]: data };
  //       })
  //     );
  //     setmovies(Object.assign({}, ...moviesData));
  //     setLoading(false);
  //   };
  //   fetch();
  // }, []);

  // const handleCategoryChange = (category: string) => {
  //   setActiveCategory(category);
  // };

  return (
    <main className="container mx-auto p-4 md:p-6 lg:p-8">
      <div className="text-3xl font-bold mb-6">no series yet !!!!</div>
      {/* <div className="flex flex-wrap justify-center mb-6">
        {categories.map((category) => (
          <button
            key={category.title}
            className={`text-lg font-bold px-4 py-2 mx-2 my-3 rounded-lg ${
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
        {loading ? (
          <Loader />
        ) : (
          <div
            className="scrollable-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            style={{ maxHeight: "80vh" }}
          >
            {movies[activeCategory] &&
              movies[activeCategory].map((drama) => (
                <div key={drama.shareId} className="w-full">
                  <SeriesCard drama={drama} />
                </div>
              ))}
          </div>
        )}
      </div> */}
    </main>
  );
};

export default Home;
