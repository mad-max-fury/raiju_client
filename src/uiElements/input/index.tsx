"use client";

import React, { ForwardedRef } from "react";
import clsx from "clsx";
import {
  FieldValues,
  UseFormRegisterReturn,
  Path,
  InternalFieldName,
} from "react-hook-form";

import { InputProps } from "./index.types";
import { Typography } from "../typography";

const InputComponent = <FV extends FieldValues>(
  props: InputProps<FV>,
  ref?: ForwardedRef<HTMLInputElement>
) => {
  const {
    placeholder,
    errorMsg,
    successMsg,
    label,
    register,
    name,
    customClassName,
    hideErrorMsg,
    ...rest
  } = props;

  // React hook form register
  const registerInput: UseFormRegisterReturn<Path<FV>> | object = register
    ? register(name, { required: rest.required })
    : {};

  return (
    <div className={` font-poppins relative z-0 flex w-full flex-col`}>
      {label && (
        <label
          className={clsx(
            "mb-4 w-fit text-body-s font-semibold first-letter:capitalize",
            errorMsg ? "text-error" : "text-gray-3"
          )}
          htmlFor={name}
        >
          {label}
        </label>
      )}

      <input
        className={clsx(
          `peer block max-h-14 w-full appearance-none rounded-xl border bg-white px-6 py-5 text-[0.875rem] font-semibold placeholder:font-normal placeholder:text-gray-4 autofill:bg-white focus:outline-none`,
          rest.disabled
            ? "disabled:cursor-not-allowed disabled:bg-primary-light-100 disabled:font-semibold  disabled:text-gray-3"
            : "",

          errorMsg
            ? "border-error text-error focus:ring-error"
            : successMsg
            ? "border-success text-success focus:border-success focus:ring-success"
            : "focus:ring-primary-dark border-gray-4 text-primary-main focus:border-success",
          customClassName
        )}
        id={name}
        placeholder={placeholder}
        {...rest}
        ref={ref}
        {...registerInput}
      />

      {!hideErrorMsg && (errorMsg || successMsg) ? (
        <Typography
          variant="caption-s"
          fontWeight="regular"
          color={errorMsg ? "error" : "success"}
          customClassName="mt-2"
        >
          {errorMsg || successMsg}
        </Typography>
      ) : null}
    </div>
  );
};

export type InputComponentType = <
  FV extends FieldValues,
  TFieldName extends InternalFieldName
>(
  props: InputProps<FV> & {
    ref?:
      | React.ForwardedRef<HTMLInputElement>
      | UseFormRegisterReturn<TFieldName>;
  }
) => ReturnType<typeof InputComponent>;

const Input = React.forwardRef(InputComponent) as InputComponentType;

export { Input };
export * from "./index.types";
