import { useState } from "react";
import { Button } from "../button";
import Modal from "../Modal";
import FilterIcon from "../../assets/svg/filterIcon";
import { Typography } from "../typography";
import SelectComp, { SelectOption } from "../select";
import { reduceToSelectOptions } from "../../utils/helpers";
import { ITransactions } from "../../mocks/transactions";
import { ColumnFiltersState } from "@tanstack/react-table";
import { Input } from "../input";

type Props = {
  onFilterChange: (value: { id: string; value: string }[]) => void;
  items: ITransactions;
  currentFilter: ColumnFiltersState;
};

function FilterBy({ items, onFilterChange, currentFilter }: Props) {
  const [showFilters, setShowFilters] = useState(false);
  const [filtersValue, setFiltersValue] = useState<SelectOption[]>([]);
  const status = [
    { label: "All", value: "", id: "status" },
    ...reduceToSelectOptions(items, "status"),
  ].map((status) => ({
    ...status,
    id: "status",
  }));
  const statusValue = currentFilter
    ? currentFilter
        .filter(({ id }) => id === "status")
        .map(({ value }) => ({ label: value === "" ? "All" : value, value }))[0]
    : null;
  const providers = [
    { label: "All", value: "", id: "provider" },
    ...reduceToSelectOptions(items, "provider"),
  ].map((provider) => ({ ...provider, id: "provider" }));
  const providersValue = currentFilter
    ? currentFilter
        .filter(({ id }) => id === "provider")
        .map(({ value }) => ({ label: value === "" ? "All" : value, value }))[0]
    : null;
  const product = [
    { label: "All", value: "", id: "product" },
    ...reduceToSelectOptions(items, "product"),
  ].map((product) => ({
    ...product,
    id: "product",
  }));
  const productValue = currentFilter
    ? currentFilter
        .filter(({ id }) => id === "product")
        .map(({ value }) => ({ label: value === "" ? "All" : value, value }))[0]
    : null;

  const onApply = () => {
    // @ts-expect-error
    const newValue = filtersValue.map(({ id, value }) => ({
      id,
      value,
    }));
    onFilterChange(newValue);
    setShowFilters(false);
  };
  return (
    <div>
      <Button
        variant={"transparent"}
        leftIcon={<FilterIcon />}
        size={"medium-with-icon"}
        onClick={() => setShowFilters(!showFilters)}
        fit
        customClassName=" !h-[40px] !border-border py-1 gap-2 !bg-white/90 !outline-none  !ring-0"
      >
        <Typography variant="body-r"> Filter</Typography>
      </Button>
      <Modal
        open={showFilters}
        setOpen={setShowFilters}
        size="lg"
        customClassName="max-w-[768px]"
      >
        <div className="h-fit">
          <Typography variant="body-r" customClassName="mb-6">
            <b>Add filter properties</b>
          </Typography>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-4 border-b pb-8 mb-4">
            <div className="w-full md:col-span-2">
              <SelectComp
                label="Services"
                name="product"
                id="product"
                height={56}
                options={product}
                value={productValue}
                onChange={(value: any) =>
                  setFiltersValue((prev: any) => [...prev, value])
                }
              />
            </div>
            <SelectComp
              label="Service provider"
              name="provider"
              id="provider"
              options={providers}
              value={providersValue}
              onChange={(value: any) =>
                setFiltersValue((prev: any) => [...prev, value])
              }
            />
            <SelectComp
              label="Status"
              name="status"
              id="status"
              value={statusValue}
              options={status}
              onChange={(value: any) =>
                setFiltersValue((prev: any) => [...prev, value])
              }
            />
            <Input
              name="name"
              label="Start Date"
              placeholder="Username"
              type={"date"}
              variant="plain"
            />
            <Input
              name="name"
              label="End Date"
              placeholder="Username"
              type={"date"}
              variant="plain"
            />
          </div>
          <div className="w-full flex justify-end items-center gap-3">
            <Button
              variant={"outlined"}
              size={"sm"}
              fit
              onClick={() => setShowFilters(!showFilters)}
            >
              <Typography variant="body-r"> Cancel</Typography>
            </Button>
            <Button fit size={"sm"} onClick={onApply}>
              <Typography variant="body-r"> Apply</Typography>
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default FilterBy;
