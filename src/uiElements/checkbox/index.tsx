"use client";

import { FieldValues, Path, UseFormRegisterReturn } from "react-hook-form";
import { CheckboxProps } from "./index.types";
import styles from "./index.module.scss";
import React, { ForwardedRef } from "react";
import clsx from "clsx";

const CheckBoxComponent = <FV extends FieldValues>(
  props: CheckboxProps<FV>,
  ref?: ForwardedRef<HTMLInputElement>
) => {
  const { label, register, name, children, ...rest } = props;

  // React hook form register
  const registerCheckbox: UseFormRegisterReturn<Path<FV>> | object = register
    ? register(name, { required: rest.required })
    : {};

  return (
    <div className="flex w-fit items-center gap-2">
      <input
        type="checkbox"
        id={name}
        ref={ref}
        {...rest}
        {...registerCheckbox}
        className={clsx(
          styles.checkbox,
          rest.className,
          rest.readOnly && "read-only:outline-0 read-only:focus:ring-0",
          "!mt-0 "
        )}
      />

      <label
        className="flex cursor-pointer items-center text-primary-main"
        htmlFor={name}
      >
        {label ? label : children}
      </label>
    </div>
  );
};

const CheckBox = React.forwardRef(CheckBoxComponent) as <
  FV extends FieldValues
>(
  props: CheckboxProps<FV> & { ref?: React.ForwardedRef<HTMLInputElement> }
) => ReturnType<typeof CheckBoxComponent>;

export { CheckBox };
export * from "./index.types";
