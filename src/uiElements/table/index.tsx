import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Typography } from "../typography";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import cn from "../../utils/common";
import Search from "./search";
import { useRef, useState } from "react";
import FilterBy from "./filterBy";
import Pagination from "../Pagination";
import { purifyArray } from "../../utils/helpers";
import { MetaData } from "../../app/slices/transactionSlice";
import { Button } from "../button";
import { useReactToPrint } from "react-to-print";
import { logoSmall } from "../../assets/images";
import Modal from "../Modal";
interface TableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  heading?: string;
  goTo?: string;
  goToText?: string;
  withSearch?: boolean;
  withPagination?: boolean;
  pageSize: number;
  metaData?: MetaData;
  currentPage?: number;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
}

const pageStyle = `
@page {
size: A4;

}
 



`;
export default function TableComp<TData, TValue>({
  data,
  columns,
  heading,
  goTo,
  goToText,
  withSearch = false,
  withPagination = false,
  pageSize,
  metaData,
  currentPage = 1,
  setCurrentPage,
}: TableProps<TData, TValue>) {
  const tableRef = useRef(null);
  const [showPrintPdf, setShowPrintPdf] = useState(false);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: pageSize,
  });

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const table = useReactTable({
    data,
    state: {
      globalFilter,
      columnFilters,
      pagination,
    },
    columns,

    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  const handleSearch = (query: string) => {
    setGlobalFilter(query);
  };
  const handleFilterChange = (newFilter: { id: string; value: string }[]) => {
    const columnFiltersPurify = purifyArray([...columnFilters, ...newFilter]);
    // @ts-expect-error
    setColumnFilters(columnFiltersPurify);
  };

  const handleShowPdfPrint = () => setShowPrintPdf(!showPrintPdf); //
  const handlePrint = useReactToPrint({
    documentTitle: "Transaction History Raiju",
    content: () => tableRef.current,
    pageStyle: pageStyle,
  });
  return (
    <>
      <div className=" w-full overflow-x-auto my-6">
        {heading && (
          <div className="flex bg-white px-4 py-4 items-center justify-between">
            <Typography variant="h6" color="gray-1">
              {heading}
            </Typography>
            {goTo && goToText && (
              <Typography variant="body-r" color="gray-1">
                <Link className="flex items-center gap-2" to={goTo}>
                  <span>{goToText}</span>
                  <span>
                    <FaArrowRightLong />
                  </span>
                </Link>
              </Typography>
            )}
          </div>
        )}
        {withSearch && (
          <div className=" mb-5 h-fit gap-4 flex items-center justify-between w-full">
            <div className="flex-1">
              <Search onSearch={handleSearch} />
            </div>
            <div className=" flex gap-2 items-center">
              <FilterBy
                // @ts-expect-error
                items={data}
                currentFilter={columnFilters}
                onFilterChange={handleFilterChange}
              />
              <div className="h-[33px] w-[2px] bg-[#2e2e2e]"></div>
              {/* <Button
                customClassName="py-[6px] px-3"
                size="sm"
                fontWeight={"regular"}
                fit
              >
                CSV
              </Button> */}
              {/* <Button
                customClassName="py-[6px] px-3"
                size="sm"
                fontWeight={"regular"}  
                fit
              >
                Excel
              </Button> */}
              <Button
                customClassName="py-[6px] px-3"
                size="sm"
                fontWeight={"regular"}
                fit
                onClick={handleShowPdfPrint}
              >
                Print PDF
              </Button>
            </div>
          </div>
        )}
        <table className="w-full  ">
          <thead
            className={cn(withSearch ? "bg-white border-b" : "bg-[#F9F9F9]")}
          >
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="py-4 text-xs text-gray-700 whitespace-nowrap"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="w-full">
            {table.getRowModel().rows.map((row) => (
              <tr
                className="bg-white [&:not(last_of_type)]:border-b"
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={cn(
                      "py-4 first-of-type:px-4 last-of-type:px-4 pr-4 "
                    )}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
        {withPagination && metaData && (
          <div className="my-4 w-4/5 mx-auto">
            <Pagination
              totalPages={metaData?.totalPages}
              handlePageClick={({ selected }) =>
                setCurrentPage && setCurrentPage(selected + 1)
              }
            />
          </div>
        )}
      </div>

      {withSearch && (
        <Modal
          open={showPrintPdf}
          setOpen={setShowPrintPdf}
          size="lg"
          customClassName="max-w-[1200px]"
        >
          <div className="relative h-full">
            <div className=" flex w-full top-0 left-0 sticky items-center h-[80px] mb-4 bg-white shadow-sm justify-end gap-6 px-6 ">
              <Button
                customClassName="py-[6px] h-[50px] px-3"
                size="sm"
                fontWeight={"regular"}
                fit
                onClick={handleShowPdfPrint}
              >
                Cancel
              </Button>
              <Button
                customClassName="py-[6px] h-[50px] px-3"
                size="sm"
                fontWeight={"regular"}
                fit
                onClick={handlePrint}
              >
                Print PDF
              </Button>
            </div>
            <div ref={tableRef}>
              <div className="w-full flex flex-col gap-2 items-center mb-4">
                <img src={logoSmall} alt="logo" className="h-[60px] w-[60px]" />
                <Typography variant="h4" color="gray-1">
                  Transaction History Raiju
                </Typography>
              </div>
              <table className="w-full">
                <thead
                  className={cn(
                    withSearch ? "bg-white border-b" : "bg-[#F9F9F9]"
                  )}
                >
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          className="py-4 text-xs text-gray-700 whitespace-nowrap"
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="w-full">
                  {table.getRowModel().rows.map((row) => (
                    <tr
                      className="bg-white [&:not(last_of_type)]:border-b"
                      key={row.id}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className={cn(
                            "py-4 first-of-type:px-4 last-of-type:px-4 pr-4 "
                          )}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  {table.getFooterGroups().map((footerGroup) => (
                    <tr key={footerGroup.id}>
                      {footerGroup.headers.map((header) => (
                        <th key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.footer,
                                header.getContext()
                              )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </tfoot>
              </table>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
