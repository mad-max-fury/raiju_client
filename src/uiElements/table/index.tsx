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
import { useState } from "react";
import FilterBy from "./filterBy";
import Pagination from "../Pagination";
import { purifyArray } from "../../utils/helpers";
interface TableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  heading?: string;
  goTo?: string;
  goToText?: string;
  withSearch?: boolean;
  withPagination?: boolean;
}
export default function TableComp<TData, TValue>({
  data,
  columns,
  heading,
  goTo,
  goToText,
  withSearch = false,
  withPagination = false,
}: TableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const table = useReactTable({
    data,
    state: {
      globalFilter,
      columnFilters,
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
  return (
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
          <div className="w-[60%] ">
            <Search onSearch={handleSearch} />
          </div>
          <div className="w-[40%]">
            <FilterBy
              // @ts-expect-error
              items={data}
              currentFilter={columnFilters}
              onFilterChange={handleFilterChange}
            />
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
      {withPagination && (
        <div className="my-4 w-4/5 mx-auto">
          <Pagination handlePageClick={() => null} />
        </div>
      )}
    </div>
  );
}
