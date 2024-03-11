import clsx from "clsx";
import { TypographyProps, variantMapping } from "./index.types";
import React from "react";
import { cva } from "class-variance-authority";

const typography = cva("", {
  variants: {
    intent: {
      h1: "text-h-1 mxs:text-h-2",
      h2: "text-h-2 mxs:text-h-3",
      h3: "text-h-3 mxs:text-h-4",
      h4: "text-h-4 mxs:text-h-5",
      h5: "text-h-5 mxs:text-h-6",
      h6: "text-h-6 mxs:text-body-l",
      "body-l": "text-body-l mxs:text-body-m",
      "body-m": "text-body-m mxs:text-body-r",
      "body-r": "text-body-r mxs:text-body-s",
      "body-s": "text-body-s mxs:text-caption-s",
      "caption-s": "text-caption-s mxs:text-caption-s",
    },
    font: {
      poppins: "poppins",
    },
    color: {
      white: "text-white",
      "gray-1": "text-gray-1",
      "gray-2": "text-gray-2",
      "gray-3": "text-gray-3",
      "gray-4": "text-gray-4",
      info: "text-info",
      success: "text-success",
      warn: "text-warning",
      error: "text-error",
      secondary: "text-secondary-main",
      primary: "text-primary-main",
      "primary-light-100": "text-primary-light-100",
      "secondary-100": "text-secondary-100",
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
    underline: { always: "underline", hover: "hover:underline", none: "" },
    align: {
      center: "text-center",
      start: "text-start",
      end: "text-end",
      left: "text-left",
      right: "text-right",
      justify: "text-justify",
    },
  },
  compoundVariants: [],
});

// Typography component
const Typography: React.FC<TypographyProps> = (props) => {
  const {
    variant = "body-r",
    tag,
    underline = "none",
    fontWeight,
    gutterBottom,
    noWrap,
    align = "left",
    color = "primary",
    customClassName = "",
    font,
    children,
    ...rest
  } = props;

  // Resolved tag
  const Tag = (tag ||
    variantMapping[variant] ||
    "p") as keyof JSX.IntrinsicElements;

  // Classes
  const className = clsx(
    gutterBottom && "mb-4",
    noWrap && "overflow-hidden text-ellipsis whitespace-nowrap"
  );

  return (
    <Tag
      className={typography({
        intent: variant,
        underline,
        fontWeight,
        color,
        align,
        font,
        className: `${customClassName} ${className} `,
      })}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export { Typography };
export * from "./index.types";
