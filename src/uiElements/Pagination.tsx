import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";

const Pagination = ({
  handlePageClick,
  hideNextPrevText = false,
}: {
  handlePageClick: (x: { selected: number }) => void;
  hideNextPrevText?: boolean;
}) => {
  return (
    <nav className="">
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <span className="flex items-center gap-2">
            {!hideNextPrevText && "Next"}
            <FaChevronRight className="w-5 h-5" aria-hidden="true" />
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={12}
        previousLabel={
          <span className="flex items-center gap-2">
            <FaChevronLeft className="w-5 h-5" aria-hidden="true" />
            {!hideNextPrevText && "Previous"}
          </span>
        }
        renderOnZeroPageCount={null}
        className="flex items-center justify-between gap-1 px-4 sm:px-0"
        pageClassName="text-sm font-medium text-[#98A2B3]"
        activeLinkClassName="text-black border-[#F56630]"
        pageLinkClassName="flex items-center justify-center border border-transparent hover:text-gray-[#344054] h-6 w-6 rounded-md hover:border-gray-300"
        previousLinkClassName="block px-3 py-2 rounded-lg border border-[#D0D5DD] text-[#344054]"
        nextLinkClassName="block px-3 py-2 rounded-lg border border-[#D0D5DD] text-[#344054]"
        previousClassName="mr-auto"
        nextClassName="ml-auto"
      />
    </nav>
  );
};

export default Pagination;
