export interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  customClassName?: string;
  color?: 'secondary' | 'secondary-white';
  toggleSize?: 'small' | 'medium';
}
