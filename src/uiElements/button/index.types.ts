import { TypographyFontWeight } from '../typography';

export enum ButtonVariants {
  filled = 'filled',
  outlined = 'outlined',
  text = 'text',
  transparent = 'transparent',
}

export type ButtonColors =
  | 'primary'
  | 'gray'
  | 'gray-1'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'primary-light-100';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof ButtonVariants;
  color?: ButtonColors;
  label?: React.ReactNode | string;
  hideLabel?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  fontWeight?: TypographyFontWeight;
  customClassName?: string;
  fit?: boolean;
  size?: 'large' | 'medium' | 'medium-with-icon';
}
