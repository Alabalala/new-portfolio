import { tv } from "tailwind-variants";

export const normalText = tv({
    base: "transition-colors",
    variants: {
            size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    color: {
      light: "text-white",
      dark: "text-gray-900",
      primary: "text-blue-500",
      secondary: "text-gray-700",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
    font: {
      sans: "font-sans",
      serif: "font-serif",
      mono: "font-mono",
    },
  },
  defaultVariants: {
    size: "md",
    color: "dark",
    weight: "normal",
    font: "sans",
  }
})