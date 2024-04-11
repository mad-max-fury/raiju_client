import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";

const Pagination = ({
  handlePageClick,
  totalPages,
  currentPage,
}: {
  handlePageClick: (x: { selected: number }) => void;
  totalPages: number;
  currentPage: number;
}) => {
  return (
    <nav className="">
      <ReactPaginate
        breakLabel="..."
        nextLabel={<span className=" items-center gap-2 hidden"></span>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        previousLabel={<span className=" items-center gap-2 hidden"></span>}
        renderOnZeroPageCount={null}
        className="flex items-center justify-center gap-2 px-4 sm:px-0 max-w-screen-sm mx-auto"
        pageClassName="text-sm font-medium  "
        pageLinkClassName="flex items-center justify-center text-black/90 border text-gray-[#344054] h-8 w-8 rounded-full bg-white border-gray-300"
        forcePage={currentPage - 1}
        activeLinkClassName="!text-white !bg-black"
        // previousLinkClassName="block px-3 py-2 rounded-lg border border-[#D0D5DD] text-[#344054]"
        // nextLinkClassName="block px-3 py-2 rounded-lg border border-[#D0D5DD] text-[#344054]"
        // previousClassName="mr-auto"
        // nextClassName="ml-auto"
      />
    </nav>
  );
};

export default Pagination;
