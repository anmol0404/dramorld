"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaInstagram, FaTelegram, FaDownload, FaCopy } from "react-icons/fa";
import { getAIOByShareId } from "@/services/botApi";
import Loader from "@/components/Loader";
import DialogBox from "@/components/ui/DialogBox";
import env from "@/services/env";

interface DramaPageProps {
  params: { id: string };
}

const DramaDetailPage = ({ params }: DramaPageProps) => {
  const { id } = params;
  const [drama, setDrama] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const downloadLink = `https://t.me/infinitedramabot?start=${id}-eng`;

  useEffect(() => {
    const fetchDrama = async () => {
      try {
        const dramaData = await getAIOByShareId(id);
        setDrama(dramaData);
      } catch (error) {
        console.error("Error fetching drama:", error);
        setError("Error loading drama details.");
      }
    };

    fetchDrama();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!drama) {
    return <Loader />;
  }

  const copyDownloadLink = () => {
    navigator.clipboard
      .writeText(downloadLink)
      .then(() => setIsDialogOpen(true))
      .catch((err) => console.error("Failed to copy link:", err));
  };

  const handleDialogConfirm = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="flex flex-col ">
      <div className="flex-1 mx-auto mt-16 flex flex-col justify-between">
        <div
          className="relative w-full max-w-screen-md mx-auto mb-2"
          style={{
            aspectRatio: "9/16",
            maxHeight: "85vh",
            minHeight: "70vh",
            maxWidth: "95vw",
            minWidth: "90vw",
          }}
        >
          <div
            className="absolute inset-0 -z-10 shadow-2xl rounded-lg"
            style={{
              backgroundImage: `url(${
                drama.posterUrl || "https://i.mydramalist.com/YYnYDA_2f.png"
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(10px)",
              transform: "scale(1.1)", // Slightly zoom to avoid edges being visible
            }}
          ></div>

          {/* Foreground Image */}
          {isImageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <Loader /> {/* Spinner or Skeleton */}
            </div>
          )}
          <Image
            className="rounded-lg object-contain relative"
            alt={drama.detail}
            src={drama.posterUrl || "https://i.mydramalist.com/YYnYDA_2f.png"}
            layout="fill"
            objectFit="contain"
            priority
            onLoad={() => setIsImageLoading(false)} // Handle image load
          />
        </div>
        <div className="bg-gray-100 text-gray-700 text-xs mb-4 mx-2 border border-gray-300 p-4 rounded-md shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            {drama.title}
          </h2>
          <div className="space-y-1">
            <div>
              <span className="font-semibold">Type:</span> {drama.type}
            </div>
            <div>
              <span className="font-semibold">Rating:</span> {drama.rating}
            </div>
            <div>
              <span className="font-semibold">Year:</span> {drama.year}
            </div>{" "}
            {drama.totalEpisodes !== 0 && (
              <div>
                <span className="font-semibold">Episodes:</span>
                {drama.totalEpisodes}
              </div>
            )}
            <div>
              <span className="font-semibold">Genres:</span>{" "}
              {drama.genres.join(", ")}
            </div>
            <div>
              <span className="font-semibold">Status:</span> {drama.status}
            </div>
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
        <div className="flex items-center justify-center gap-2">
          <a
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-white shadow-md"
          >
            <FaDownload className="mr-2" /> Download
          </a>

          <button
            className="flex items-center bg-gray-500 text-white rounded-full px-4 py-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={copyDownloadLink}
          >
            <FaCopy className="mr-2" /> Copy Link
          </button>
        </div>{" "}
        <div className="flex justify-center gap-4 mt-8 mb-10">
          <a
            href="https://t.me/???????"
            className="text-blue-500 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram size={24} />
          </a>
          <a
            href="https://instagram.com/?????"
            className="text-pink-500 hover:text-pink-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      <DialogBox
        type="custom"
        title="Link Copied!"
        message="The download link has been copied to your clipboard."
        isOpen={isDialogOpen}
        onConfirm={handleDialogConfirm}
      />
    </div>
  );
};

export default DramaDetailPage;
