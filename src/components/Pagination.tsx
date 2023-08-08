import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { PageInfo } from '../components/Interfaces';

interface IPagination {
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  PageInfo: PageInfo | null;
}

const Pagination = (props: IPagination) => {
  const handleNextPageChange = () => {
    if (props.pageNumber === props.PageInfo?.pages) {
      props.setPageNumber(1);
    } else {
      props.setPageNumber(props.pageNumber + 1);
    }
  };

  const handlePrevPageChange = () => {
    if (props.pageNumber === 1) {
      if (props.PageInfo) {
        props.setPageNumber(props.PageInfo.pages);
      }
    } else {
      props.setPageNumber(props.pageNumber - 1);
    }
  };

  return (
    <>
      <button
        onClick={handlePrevPageChange}
        className="flex items-center gap-2 rounded-2xl bg-[#1d1d1d] px-4 py-2"
      >
        <AiOutlineArrowLeft /> Pagina{' '}
        {props.pageNumber === 1 ? props.PageInfo?.pages : props.pageNumber - 1}
      </button>
      <span>Pagina {props.pageNumber}</span>
      <button
        onClick={handleNextPageChange}
        className="flex items-center gap-2 rounded-2xl bg-[#1d1d1d] px-4 py-2"
      >
        Pagina{' '}
        {props.pageNumber === props.PageInfo?.pages ? 1 : props.pageNumber + 1}
        <AiOutlineArrowRight />
      </button>
    </>
  );
};

export default Pagination;
