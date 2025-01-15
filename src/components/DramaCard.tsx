import { Drama } from "@/interface/Drama";
import Image from "next/image";
import Link from "next/link";

const DramaCard = ({ drama }: { drama: Drama }) => {
  return (
    <div className="border border-gray-300 shadow-md rounded-lg overflow-hidden flex flex-col h-full">
      <div className="p-4 flex flex-col md:flex-row gap-3 h-full">
        <div
          className="relative w-full md:w-1/3"
          style={{ aspectRatio: "9/10" }}
        >
          <Link href={`/dramas/${drama.shareId}`}>
            <div className="relative h-full w-full m-2 hover:scale-102 transition duration-3000">
              <Image
                className="rounded-lg object-cover w-full h-full"
                alt={drama.title}
                src={drama.posterUrl}
                layout="responsive"
                width={500}
                height={750}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            <div className="md:hidden absolute inset-0 bg-opacity-50 flex items-center justify-center opacity-0  hover:opacity-100 transition-opacity">
              <div className="ml-4 p-3 bg-slate-100 bg-opacity-90 text-gray-800 text-sm mb-2 border border-gray-200  rounded-md shadow-sm">
                <h2 className="text-lg font-bold text-gray-800 mb-3 line-clamp-3">
                  {drama.title}
                </h2>
                <div className="space-y-1">
                  <div>
                    <span className="font-semibold">Type:</span> {drama.type}
                  </div>
                  <div>
                    <span className="font-semibold">Rating:</span>{" "}
                    {drama.rating}
                  </div>
                  <div>
                    <span className="font-semibold">Year:</span> {drama.year}
                  </div>
                  <div>
                    <span className="font-semibold">Genres:</span>{" "}
                    {drama.genres.join(", ")}
                  </div>
                  <div>
                    <span className="font-semibold">Status:</span>{" "}
                    {drama.status}
                  </div>
                  {drama.totalEpisodes !== 0 && (
                    <div>
                      <span className="font-semibold">Total Episodes:</span>{" "}
                      {drama.totalEpisodes}
                    </div>
                  )}

                  <div>
                    <span className="font-semibold">Languages:</span>{" "}
                    {drama.languages.join(", ")}
                  </div>
                  <div>
                    <span className="font-semibold">Subtitles:</span>{" "}
                    {drama.subtitles.join(", ")}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-between h-full">
          <div>
            <h6 className="text-base font-sans">
              <Link
                href={`/dramas/${drama.shareId}`}
                className="text-green-500 hover:text-gray-600 transition-colors duration-300"
              >
                <span
                  className="line-clamp-2 block px-2"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {drama.title}
                </span>
              </Link>
            </h6>
          </div>
          <div className="hidden md:flex flex-grow p-2 m-2 bg-gray-100 opacity-90 shadow-md rounded-lg">
            <p
              className={`text-xs font-normal ${
                drama?.title ? "text-gray-900" : "text-red-500"
              }`}
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                WebkitLineClamp: 5,
                overflowWrap: "break-word",
                wordBreak: "break-word",
              }}
            >
              {drama?.title || "No details available"}
            </p>
          </div>

          <button
            className="mt-2 bg-blue-500 text-white rounded-full px-3 py-1 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => console.log("Add to list clicked")}
          >
            <i className="far fa-plus mr-1"></i>Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default DramaCard;
