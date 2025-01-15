// import Image from 'next/image';
// import moment from 'moment';
// import StarRating from './StarRating';
// import { FC } from 'react';

// // Define interfaces for props
// interface Genre {
//   name: string;
// }

// interface ProductionCountry {
//   name: string;
// }

// interface ExpendedCardProps {
//   backdropUrl?: string; // Updated prop name
//   posterUrl: string;    // Updated prop name
//   title?: string;
//   name?: string;
//   tagline?: string;
//   vote_average?: number;
//   genres: Genre[];
//   overview?: string;
//   budget?: number;
//   revenue?: number;
//   status?: string;
//   original_language?: string;
//   runtime?: number;
//   release_date?: string;
//   production_countries: ProductionCountry[];
// }

// const ExpendedCard: FC<ExpendedCardProps> = (props) => {
//   return (
//     <div className="flex w-full overflow-hidden shadow-[1px_1px_8px_#00000081] rounded relative flex-col md:flex-row">
//        {props.backdropUrl ? (
//         <div className="relative w-full h-full">
//           <Image
//             src={`${props.backdropUrl}`}
//             placeholder="blur"
//             blurDataURL={`${props.backdropUrl}`}
//             alt={props.title || props.name || 'Backdrop image'}
//             layout="fill"
//             objectFit="cover"
//             className="absolute opacity-[0.175]"
//           />
//         </div>
//       ) : null}

//       {/* Poster */}
//       <div className="flex-4 z-1 p-8">
//         <Image
//           src={`${props.posterUrl}`}
//           alt={props.title || 'Poster image'}
//           layout="responsive"
//           width={400}
//           height={600}
//           className="shadow-[4px_4px_8px_#0000009d] rounded-[0.35rem] border-2 border-solid border-[#3d3d3d]"
//         />
//       </div>

//       {/* Content */}
//       <div className="flex-7 z-1 p-8">
//         <h1 className="text-[2.1rem] text-white">{props.title || props.name}</h1>
//         <p className="text-[1.1rem] text-[rgb(196,196,196)]">{props.tagline}</p>

//         {/* Rating */}
//         <div className="flex items-center text-base text-[rgb(202,202,202)] mx-0 my-4">
//           <StarRating rating={props.vote_average || 0} />
//         </div>

//         {/* Genres */}
//         <h2 className="text-[1.3rem] font-normal">Genres</h2>
//         <p className="mt-2 mb-6">
//           {props.genres.map((genre, i) => (
//             <span key={i} className="bg-[#47f530] text-[0.8rem] text-black shadow-[2px_2px_4px_#000000bf] mr-2 px-[0.4rem] py-[0.15rem] rounded-[0.2rem]">
//               {genre.name}
//             </span>
//           ))}
//         </p>

//         {/* Overview */}
//         <h2 className="text-[1.3rem] font-normal">Overview</h2>
//         <p className="text-[rgb(196,196,196)] leading-tight mt-1 mb-6 font-ubuntu">
//           {props.overview}
//         </p>

//         {/* Others */}
//         <h2 className="text-[1.3rem] font-normal">Others</h2>
//         <div className="grid grid-cols-[1fr_1fr] gap-[1rem_2.5rem] text-center mx-auto my-4">
//           <div className="border rounded shadow-[2px_2px_4px_#000000a6] flex flex-row items-center justify-between p-2 border-solid border-[#858585] font-ubuntu">
//             <p className="text-base">Budget</p>
//             <p className="text-[1.1rem] text-[#47f530] m-[0.2rem]">${props.budget ?? '--'}</p>
//           </div>
//           <div className="border rounded shadow-[2px_2px_4px_#000000a6] flex flex-row items-center justify-between p-2 border-solid border-[#858585] font-ubuntu">
//             <p className="text-base">Revenue</p>
//             <p className="text-[1.1rem] text-[#47f530] m-[0.2rem]">${props.revenue ?? '--'}</p>
//           </div>
//           <div className="border rounded shadow-[2px_2px_4px_#000000a6] flex flex-row items-center justify-between p-2 border-solid border-[#858585] font-ubuntu">
//             <p className="text-base">Status</p>
//             <p className="text-[1.1rem] text-[#47f530] m-[0.2rem]">{props.status}</p>
//           </div>
//           <div className="border rounded shadow-[2px_2px_4px_#000000a6] flex flex-row items-center justify-between p-2 border-solid border-[#858585] font-ubuntu">
//             <p className="text-base">Original Language</p>
//             <p className="text-[1.1rem] text-[#47f530] m-[0.2rem]">
//               {/* {ISO6391.getName(props.original_language || '')} */}
//             </p>
//           </div>
//           <div className="border rounded shadow-[2px_2px_4px_#000000a6] flex flex-row items-center justify-between p-2 border-solid border-[#858585] font-ubuntu">
//             <p className="text-base">Runtime</p>
//             <p className="text-[1.1rem] text-[#47f530] m-[0.2rem]">{props.runtime ?? '--'} mins</p>
//           </div>
//           <div className="border rounded shadow-[2px_2px_4px_#000000a6] flex flex-row items-center justify-between p-2 border-solid border-[#858585] font-ubuntu">
//             <p className="text-base">Rating</p>
//             <p className="text-[1.1rem] text-[#47f530] m-[0.2rem]">{props.vote_average ?? '--'}/10</p>
//           </div>
//           <div className="border rounded shadow-[2px_2px_4px_#000000a6] flex flex-row items-center justify-between p-2 border-solid border-[#858585] font-ubuntu">
//             <p className="text-base">Release Date</p>
//             <p className="text-[1.1rem] text-[#47f530] m-[0.2rem]">
//               {props.release_date ? moment(props.release_date).format('DD MMMM YYYY') : '--'}
//             </p>
//           </div>
//           <div className="border rounded shadow-[2px_2px_4px_#000000a6] flex flex-row items-center justify-between p-2 border-solid border-[#858585] font-ubuntu">
//             <p className="text-base">Country</p>
//             <p className="text-[1.1rem] text-[#47f530] m-[0.2rem]">
//               {props.production_countries.length > 0 ? props.production_countries[0].name : '--'}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpendedCard;
