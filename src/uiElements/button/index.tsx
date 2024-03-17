import React from "react";

import { cva } from "class-variance-authority";

import { ButtonProps } from "./index.types";

import { CircularLoader } from "../circular-loader";
import cn from "../../utils/common";

const button = cva("", {
  variants: {
    variant: {
      filled: "text-white",
      outlined: "!bg-white border",
      transparent: "!bg-transparent border",
      text: "!bg-transparent",
    },
    size: {
      large: "py-5 px-12",
      medium: "px-8 py-3.5",
      sm: "px-6 py-2.5",
      "medium-with-icon": "px-8 py-3.5 pl-5",
    },
    color: {
      primary: " bg-tertiary-950",
      gray: "bg-gray-3 ",
      "gray-1": "bg-gray-1 ",
      secondary:
        "bg-secondary-main !text-primary-main border border-secondary-main",
      success: "bg-success",
      error: "bg-error",
      info: "bg-error",
      "primary-light-100": "bg-primary-light-100 !text-primary-main",
    },
    fontWeight: {
      thin: "font-thin",
      "extra-light": "font-extra-light",
      light: "font-light",
      regular: "font-regular",
      medium: "font-medium",
      "semi-bold": "font-semi-bold",
      bold: "font-bold",
      "extra-bold": "font-extra-bold",
      black: "font-black",
    },
  },
  compoundVariants: [
    {
      variant: ["outlined", "transparent"],
      color: "primary",
      class: "text-primary-main border-primary-main ",
    },
    {
      variant: ["outlined", "transparent"],
      color: "gray",
      class: "text-gray-3 border-gray-3 ",
    },
    {
      variant: ["outlined", "transparent"],
      color: "success",
      class: "text-success border-success ",
    },
    {
      variant: ["outlined", "transparent"],
      color: "error",
      class: "text-error border-error ",
    },
    {
      variant: ["outlined", "transparent"],
      color: "secondary",
      class: "text-primary-main border-secondary-main ",
    },
    {
      variant: "text",
      color: "primary",
      class: "text-primary-main",
    },
    {
      variant: "text",
      color: "gray-1",
      class: "text-gray-1",
    },
    {
      variant: "text",
      color: "gray",
      class: "text-gray-3",
    },
    {
      variant: "text",
      color: "success",
      class: "text-success",
    },
    {
      variant: "text",
      color: "error",
      class: "text-error",
    },
    {
      variant: "text",
      color: "info",
      class: "text-info",
    },
    {
      variant: "text",
      color: "secondary",
      class: "text-primary-main",
    },
    {
      variant: "filled",
      color: "primary-light-100",
      class: "text-primary-main",
    },
    {
      variant: "text",
      size: "large",
      class: "!py-0 !px-0",
    },
  ],
});

// Button component
const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = "filled",
    color = "primary",
    label = "",
    leftIcon,
    rightIcon,
    loading,
    customClassName = "",
    children,
    fontWeight = "semi-bold",
    fit,
    size = "large",
    ...rest
  } = props;

  return (
    <button
      className={button({
        variant,
        color,
        size,
        fontWeight,
        className: cn(
          "flex items-center justify-center gap-4 whitespace-nowrap rounded-lg text-body-r transition-all duration-300 focus:ring-4 focus:ring-primary-light-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:!border-gray-3 disabled:bg-gray-3 mmd:px-[3rem] mmd:py-[1.2rem]",
          customClassName,
          fit ? "w-fit" : "w-full",
          ["text", "outlined"].includes(variant)
            ? "disabled:!text-gray-3 disabled:[&>path]:stroke-gray-3"
            : " disabled:!text-white"
        ),
      })}
      type="button"
      {...rest}
    >
      {leftIcon && (
        <span className={cn(rest.disabled && "[&>path]:stroke-gray-3")}>
          {leftIcon}
        </span>
      )}

      {label || children}

      {loading ? (
        <CircularLoader
          customClassName={cn(
            rest.disabled && "opacity-50 !text-primary-main/50"
          )}
        />
      ) : (
        <React.Fragment>
          {rightIcon && (
            <span className={cn(rest.disabled && "[&>path]:stroke-gray-3")}>
              {rightIcon}
            </span>
          )}
        </React.Fragment>
      )}
    </button>
  );
};

export { Button };
export * from "./index.types";
