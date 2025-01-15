// import './style.scss';
// import { FaPlay } from 'react-icons/fa';
// import Link from 'next/link';
// import moment from 'moment';
// import StarRating from './StarRating';
// import Carousel from './Carousel';
// import Image from './Image';

// interface Movie {
//   id: number;
//   title: string;
//   posterUrl: string;
//   release_date: string;
//   original_language: string;
//   vote_average: number;
//   overview: string;
// }

// interface TrendingProps {
//   movies: Movie[];
// }

// const Trending: React.FC<TrendingProps> = ({ movies }) => (
//   <div className="trending mb-8">
//     <Carousel>
//       {movies.map((movie, i) => (
//         <Link prefetch={false} key={i} href={`/movies/${movie.id}`}>
//           <div className="trending__movie h-[26rem] overflow-hidden relative shadow-[2px_2px_0.5rem_rgba(0,0,0,0.5)] border mx-2 my-0 rounded-[0.3rem] border-solid border-[#686868]">
//             <div className="playIcon absolute -translate-x-2/4 -translate-y-2/4 text-[1.75rem] cursor-pointer transition-all duration-[0.2s] ease-[ease-in-out] opacity-75 bg-black w-16 h-16 flex justify-center items-center z-[5] rounded-[50%] left-2/4 top-[40%] hover:opacity-100">
//               <FaPlay />
//             </div>
//             <div className="backdrop h-full">
//               <Image
//                 src={`${movie.posterUrl}`}
//                 placeholderSrc={`${movie.posterUrl}`}
//                 alt={movie.title}
//               />
//             </div>
//             <div className="info w-full absolute text-left p-4 bottom-0" style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 10%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 1) 100%)'}}>
//               <h2 className="title font-[normal] text-[1.8rem]" style={{fontFamily: 'ubuntu'}}>{movie.title}</h2>
//               <p className="others text-[#d1d1d1] px-0 py-[0.2rem]">
//                 {moment(movie.release_date).format('MMMM YYYY')} |{' '}
//                 {/* {ISO6391.getName(movie.original_language)} */}
//               </p>
//               <div className="rating grid grid-cols-[auto_auto] gap-2 justify-start">
//                 <StarRating rating={movie.vote_average} starDimension={16} />
//                 <span>({movie.vote_average.toFixed(1)})</span>
//               </div>
//               <p className="overview max-w-[70%] text-[#c9c9c9] pt-1">{movie.overview}</p>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </Carousel>
//   </div>
// );

// export default Trending;
