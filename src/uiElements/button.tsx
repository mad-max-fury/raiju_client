import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import cn from "../utils/common";

const buttonVariants = cva()

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, type, ...props }, ref) => (
        <Button
          type={type}
          className={ cn(
            "w-full",
            className
          )}
          ref={ref}
          { ...props }
        />
    )
)

Button.displayName = "Button";

export { Button };