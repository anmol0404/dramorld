import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

 interface PaginationProps {
  pathname: string;
  currentPage: number;
  totalPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ pathname, currentPage, totalPage }) => {
  const nextPageUrl = `${pathname}?page=${currentPage === totalPage ? currentPage : currentPage + 1}`;
  const prevPageUrl = `${pathname}?page=${currentPage === 1 ? 1 : currentPage - 1}`;

  return (
    <div className="flex justify-around mt-12 mb-8 mx-auto">
      <Link href={prevPageUrl} passHref>
        <button
          className="text-base shadow-[2px_2px_6px_rgba(0,0,0,0.76)] cursor-pointer px-2 py-1 rounded border-2 border-solid border-[#222222] disabled:opacity-50 disabled:text-black bg-[#yourPrimaryColor] hover:bg-[#yourDarkenedPrimaryColor]"
          disabled={currentPage === 1}
          type="button"
        >
          <FaArrowLeft />
          {' '}
          Previous
        </button>
      </Link>

      <div className="flex w-full max-w-[25rem] justify-around flex-row flex-nowrap items-center">
        {currentPage > 3 && (
          <>
            <Link href={`${pathname}?page=1`} passHref>
              <span className="text-base text-[#yourPrimaryColor]">1</span>
            </Link>
            <span>...</span>
          </>
        )}
        {currentPage > 2 && (
          <Link href={`${pathname}?page=${currentPage - 2}`} passHref>
            <span className="text-base text-[#yourPrimaryColor]">{currentPage - 2}</span>
          </Link>
        )}

        {currentPage > 1 && (
          <Link href={`${pathname}?page=${currentPage - 1}`} passHref>
            <span className="text-base text-[#yourPrimaryColor]">{currentPage - 1}</span>
          </Link>
        )}

        <span className="text-[1.1rem]">{currentPage}</span>

        {currentPage < totalPage && (
          <Link href={`${pathname}?page=${currentPage + 1}`} passHref>
            <span className="text-base text-[#yourPrimaryColor]">{currentPage + 1}</span>
          </Link>
        )}

        {currentPage < totalPage - 1 && (
          <Link href={`${pathname}?page=${currentPage + 2}`} passHref>
            <span className="text-base text-[#yourPrimaryColor]">{currentPage + 2}</span>
          </Link>
        )}

        {currentPage < totalPage - 2 && (
          <>
            <span>...</span>
            <Link href={`${pathname}?page=${totalPage}`} passHref>
              <span className="text-base text-[#yourPrimaryColor]">{totalPage}</span>
            </Link>
          </>
        )}
      </div>

      <Link href={nextPageUrl} passHref>
        <button
          className="text-base shadow-[2px_2px_6px_rgba(0,0,0,0.76)] cursor-pointer px-2 py-1 rounded border-2 border-solid border-[#222222] disabled:opacity-50 disabled:text-black bg-[#yourPrimaryColor] hover:bg-[#yourDarkenedPrimaryColor]"
          disabled={currentPage === totalPage}
          type="button"
        >
          Next
          {' '}
          <FaArrowRight />
        </button>
      </Link>
    </div>
  );
}

export default Pagination;
