export const variantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  "body-l": "p",
  "body-m": "p",
  "body-r": "p",
  "body-s": "p",
  "caption-s": "p",
};

export type TypographyVariant = keyof typeof variantMapping;

export type TypographyColors =
  | "white"
  | "primary"
  | "primary-light-100"
  | "secondary"
  | "secondary-100"
  | "success"
  | "error"
  | "info"
  | "warn"
  | "gray-1"
  | "gray-2"
  | "gray-3"
  | "gray-4";

export type TypographyAlign =
  | "start"
  | "end"
  | "left"
  | "right"
  | "center"
  | "justify";

export type TypographyFontWeight =
  | "thin"
  | "extra-light"
  | "light"
  | "regular"
  | "medium"
  | "semi-bold"
  | "bold"
  | "extra-bold"
  | "black";

export type TypographyFont = "poppins";

export interface TypographyProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {
  tag?: keyof JSX.IntrinsicElements;
  variant?: TypographyVariant;
  color?: TypographyColors;
  fontWeight?: TypographyFontWeight;
  gutterBottom?: boolean;
  align?: TypographyAlign;
  noWrap?: boolean;
  underline?: "none" | "always" | "hover";
  customClassName?: string;
  children?: React.ReactNode;
  font?: TypographyFont;
}
