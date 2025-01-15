"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaInstagram, FaTelegram, FaDownload, FaCopy } from "react-icons/fa";
import { getAIOByShareId } from "@/services/botApi";
import Loader from "@/components/Loader";
import DialogBox from "@/components/ui/DialogBox"; // Import your DialogBox component

interface DramaPageProps {
  params: { id: string };
}

const DramaDetailPage = ({ params }: DramaPageProps) => {
  //   const { id } = params;
  //   const [drama, setDrama] = useState<any>(null);
  //   const [error, setError] = useState<string | null>(null);
  //   const [isDialogOpen, setIsDialogOpen] = useState(false); // State for dialog visibility
  //   const dummyDownloadLink = "https://example.com/dummy-download-file.zip";

  //   useEffect(() => {
  //     const fetchDrama = async () => {
  //       try {
  //         const dramaData = await getAIOByShareId(id);
  //         setDrama(dramaData);
  //       } catch (error) {
  //         console.error("Error fetching drama:", error);
  //         setError("Error loading drama details.");
  //       }
  //     };

  //     fetchDrama();
  //   }, [id]);

  //   if (error) {
  //     return <div>{error}</div>;
  //   }

  //   if (!drama) {
  //     return <Loader />;
  //   }

  //   const copyDownloadLink = () => {
  //     navigator.clipboard
  //       .writeText(dummyDownloadLink)
  //       .then(() => setIsDialogOpen(true))
  //       .catch((err) => console.error("Failed to copy link:", err));
  //   };

  //   const handleDialogConfirm = () => {
  //     setIsDialogOpen(false);
  //   };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 mx-auto p-6 flex flex-col justify-between">
        no data found at the moment
      </div>
      {/* <div className="flex-1 mx-auto p-6 flex flex-col justify-between">
        <div className="relative w-full mb-4">
          <Image
            className="rounded-lg object-cover w-full"
            alt={drama.detail}
            src={drama.posterUrl || "https://i.mydramalist.com/YYnYDA_2f.png"}
            layout="responsive"
            width={1200}
            height={675}
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <div className="bg-gray-100 text-gray-700 text-xs mb-4 border border-gray-300 p-4 rounded-md shadow-sm">
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
              <span className="font-semibold">Year:</span> {drama.releaseYear}
            </div>
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

        <div className="flex justify-center gap-4 mb-4">
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

        <div className="flex items-center justify-center gap-2">
          <a
            href={dummyDownloadLink}
            download
            className="flex items-center bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaDownload className="mr-2" /> Download
          </a>

          <button
            className="flex items-center bg-gray-500 text-white rounded-full px-4 py-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={copyDownloadLink}
          >
            <FaCopy className="mr-2" /> Copy Link
          </button>
        </div>
      </div>

      <DialogBox
        type="alert"
        title="Link Copied!"
        message="The download link has been copied to your clipboard."
        isOpen={isDialogOpen}
        onConfirm={handleDialogConfirm}
      /> */}
    </div>
  );
};

export default DramaDetailPage;
