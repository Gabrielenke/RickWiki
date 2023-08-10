import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { PageInfo } from '../components/Interfaces';

interface IPagination {
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  PageInfo: PageInfo | null;
}

const Pagination = ({ pageNumber, PageInfo, setPageNumber }: IPagination) => {
  const handleNextPageChange = () => {
    if (pageNumber === PageInfo?.pages) {
      setPageNumber(1);
    } else {
      setPageNumber(pageNumber + 1);
    }
  };

  const handlePrevPageChange = () => {
    if (pageNumber === 1) {
      if (PageInfo) {
        setPageNumber(PageInfo.pages);
      }
    } else {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <>
      <button
        onClick={handlePrevPageChange}
        className="flex items-center gap-2 rounded-2xl bg-[#1d1d1d] px-4 py-2"
      >
        <AiOutlineArrowLeft /> Pagina{' '}
        {pageNumber === 1 ? PageInfo?.pages : pageNumber - 1}
      </button>
      <span>Pagina {pageNumber}</span>
      <button
        onClick={handleNextPageChange}
        className="flex items-center gap-2 rounded-2xl bg-[#1d1d1d] px-4 py-2"
      >
        Pagina {pageNumber === PageInfo?.pages ? 1 : pageNumber + 1}
        <AiOutlineArrowRight />
      </button>
    </>
  );
};

export default Pagination;
