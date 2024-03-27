import React, { useState } from "react";
import { Button } from "../button";
import Modal from "../Modal";
import FilterIcon from "../../assets/svg/filterIcon";
import { Typography } from "../typography";
import SelectComp, { SelectOption } from "../select";
import { reduceToSelectOptions } from "../../utils/helpers";
import { ITransactions } from "../../mocks/transactions";

type Props = {
  onFilterChange: (value: { id: string; value: string }[]) => void;
  items: ITransactions;
};

function FilterBy({ items, onFilterChange }: Props) {
  const [showFilters, setShowFilters] = useState(false);
  const [filtersValue, setFiltersValue] = useState<SelectOption[]>([]);
  const status = reduceToSelectOptions(items, "status");
  const providers = reduceToSelectOptions(items, "provider");
  const product = reduceToSelectOptions(items, "product");

  const onApply = () => {
    const newValue = filtersValue.map(({ label, value }) => ({
      id: label,
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
            Add filter properties
          </Typography>
          <div className="grid grid-cols-2 gap-x-3 gap-y-3 border-b pb-4 mb-4">
            <SelectComp
              label="Services"
              name="product"
              id="product"
              options={product}
              onChange={(value) =>
                setFiltersValue((prev) => [
                  ...prev,
                  { label: value?.label ?? "", value: value?.value ?? "" },
                ])
              }
            />
            <SelectComp
              label="Product category"
              name="product"
              id="product"
              options={product}
              onChange={(value) =>
                setFiltersValue((prev) => [
                  ...prev,
                  { label: value?.label ?? "", value: value?.value ?? "" },
                ])
              }
            />
            <SelectComp
              label="Service provider"
              name="provider"
              id="provider"
              options={providers}
              onChange={(value) =>
                setFiltersValue((prev) => [
                  ...prev,
                  { label: value?.label ?? "", value: value?.value ?? "" },
                ])
              }
            />
            <SelectComp
              label="Status"
              name="status"
              id="status"
              options={status}
              onChange={(value) =>
                setFiltersValue((prev) => [
                  ...prev,
                  { label: value?.label ?? "", value: value?.value ?? "" },
                ])
              }
            />
            <SelectComp
              label="Product category"
              name="product"
              id="product"
              options={product}
              onChange={(value) =>
                setFiltersValue((prev) => [
                  ...prev,
                  { label: value?.label ?? "", value: value?.value ?? "" },
                ])
              }
            />{" "}
            <SelectComp
              label="Product category"
              name="product"
              id="product"
              options={product}
              onChange={(value) =>
                setFiltersValue((prev) => [
                  ...prev,
                  { label: value?.label ?? "", value: value?.value ?? "" },
                ])
              }
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
