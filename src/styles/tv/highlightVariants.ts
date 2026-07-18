import { tv } from "tailwind-variants";

export const highlightVariants = tv({
  base: "box-decoration-clone px-1 translate-x-0.5 translate-y-0.5",
  variants: {
    highlightVariant: {
      primary: "bg-primary text-on-primary",
      secondary: "bg-secondary text-on-secondary",
      tertiary: "bg-tertiary text-on-tertiary",
      white: "bg-white text-black",
    },
  },
  defaultVariants: {
    highlightVariant: "secondary",
  },
});
