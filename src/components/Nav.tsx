"use client";
import { useState } from "react";
import {
  MdMenu,
  MdClose,
  MdMovie,
  MdBookmarks,
  MdTv,
  MdHome,
} from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routesArray = [
  {
    title: "Home",
    path: "/",
    pathRegex: /^\/$/,
    icon: <MdHome />,
  },
  {
    title: "Movies",
    path: "/movies",
    pathRegex: /^\/movies/,
    icon: <MdMovie />,
  },
  {
    title: "TV Series",
    path: "/tv",
    pathRegex: /^\/tv/,
    icon: <MdTv />,
  },
  {
    title: "Bookmarks",
    path: "/bookmarks",
    pathRegex: /^\/bookmarks/,
    icon: <MdBookmarks />,
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button
        className="lg:hidden p-2 text-3xl fixed z-30 left-1"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <MdClose /> : <MdMenu />}
      </button>

      <nav
        className={`fixed top-0 left-0 bg-gray-900 text-white shadow-md transition-transform duration-300 z-20 flex flex-col justify-between items-center ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-64 lg:w-auto lg:static h-full `}
      >
        <div className="flex-grow flex flex-col justify-center w-full">
          <div className="linksContainer text-2xl w-full flex flex-col items-start ml-2 space-y-6">
            {routesArray.map((route) => (
              <Link
                key={route.title}
                href={route.path}
                className={`text-lg text-gray-400 flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out px-2 py-2 rounded-md border-l-4 border-transparent hover:text-white hover:bg-gray-500 hover:scale-105 ${
                  route.pathRegex.test(pathname)
                    ? "active text-green-500 border-l-blue-500 scale-105"
                    : ""
                }`}
              >
                <span className="link__icon text-xl">{route.icon}</span>
                <span className="link__title pl-3">{route.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
