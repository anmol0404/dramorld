"use client";

import { MdSentimentVeryDissatisfied } from "react-icons/md";

const PageNotFound: React.FC = () => (
  <div className="flex flex-col md:flex-row justify-center items-center text-center mt-[35vh] md:mt-[30vh]">
    <MdSentimentVeryDissatisfied className="text-lime-600 text-6xl md:mr-8 mb-4 md:mb-0" />
    <div className="text">
      <h1 className="text-2xl md:text-3xl font-normal mb-2">
        Oops! Page not found
      </h1>
      <p className="text-gray-400">Sorry, page not found</p>
    </div>
  </div>
);

export default PageNotFound;
