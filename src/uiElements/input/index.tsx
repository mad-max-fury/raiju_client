"use client";

import React, { ForwardedRef, useState } from "react";
import {
  FieldValues,
  UseFormRegisterReturn,
  Path,
  InternalFieldName,
} from "react-hook-form";

import { InputProps } from "./index.types";
import { Typography } from "../typography";
import cn from "../../utils/common";
import EyeCloseIcon from "../../assets/svg/eyeCloseIcon";
import EyeOpenIcon from "../../assets/svg/eyeOpenIcon";
import { Tooltip } from "../tooltip";

const InputComponent = <FV extends FieldValues>(
  props: InputProps<FV>,
  ref?: ForwardedRef<HTMLInputElement>
) => {
  const {
    placeholder,
    errorMsg,
    successMsg,
    label,
    type,
    register,
    name,
    customClassName,
    hideErrorMsg,
    icon1,
    icon2,
    variant = "default",
    customInputStyles,
    ...rest
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  // React hook form register
  const registerInput: UseFormRegisterReturn<Path<FV>> | object = register
    ? register(name, { required: rest.required })
    : {};

  return (
    <div
      className={` font-poppins relative z-0 flex w-full flex-col`}
      tabIndex={0}
    >
      {label && (
        <label
          className={cn(
            "first-letter:capitalize mb-2",
            errorMsg ? "text-error" : "text-gray-3"
          )}
          htmlFor={name}
        >
          <Typography variant={"body-s"} color={"gray-2"}>
            {label}
          </Typography>
        </label>
      )}
      <div
        className={cn(
          ` block h-14 w-full relative isolate  border-none ring-1 ring-solid  text-[0.875rem] font-semibold placeholder:font-normal placeholder:text-gray-400 autofill:bg-gray-600 transition-all ease-in-out duration-300`,
          rest.disabled &&
            "disabled:cursor-not-allowed disabled:bg-primary-light-100 disabled:font-semibold  disabled:text-gray-3",
          errorMsg
            ? "border-error text-error focus-within:ring-error"
            : successMsg
            ? "border-success text-success focus:border-success focus:ring-green-600"
            : " text-primary-main ring-border focus-within:ring-green-600",
          variant === "plain"
            ? "h-[50px] rounded-lg font-normal placeholder:text-gray-100"
            : "bg-gray-600 rounded-xl",
          customClassName
        )}
      >
        {icon1 && (
          <div className="h-fit top-1/2 -translate-y-1/2 left-4 w-[40px]  absolute flex items-center ">
            {icon1}
          </div>
        )}
        <input
          className={cn(
            " appearance-none rounded-[inherit] bg-transparent border  h-full w-full outline-none py-4 autofill:!bg-transparent ",
            icon1 && "pl-12",
            variant === "plain" && "px-4",
            customInputStyles
          )}
          id={name}
          placeholder={placeholder}
          type={showPassword && type === "password" ? "text" : type}
          {...rest}
          ref={ref}
          {...registerInput}
        />
        {icon2 ? (
          <div className="h-fit top-1/2 -translate-y-1/2 right-4  w-fit  absolute flex items-center ">
            {icon2}
          </div>
        ) : (
          <>
            {type === "password" && (
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="h-fit top-1/2 -translate-y-1/2 right-2 w-[40px]  absolute flex items-center "
              >
                {!showPassword ? (
                  <>
                    <span
                      data-tooltip-id="ICON-BTN"
                      data-tooltip-content="SHOW PASSWORD"
                    >
                      <EyeCloseIcon />
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      data-tooltip-id="ICON-BTN"
                      data-tooltip-content="HIDE PASSWORD"
                    >
                      <EyeOpenIcon />
                    </span>
                  </>
                )}
                <Tooltip id="ICON-BTN" />
              </button>
            )}
          </>
        )}
      </div>

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
