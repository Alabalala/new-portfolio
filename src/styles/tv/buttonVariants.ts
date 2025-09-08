import { tv } from "tailwind-variants";

export const buttonVariants = tv({
    base: "px-4 transition-colors font-bebas text-2xl text-center md:text-4xl lg:text-5xl md:px-8 md:py-2 cursor-pointer active:shadow-none active:scale-95 transition-transform transition-shadow duration-300",
    variants: {
        buttonVariant: 
        {
        secondary: "bg-secondary text-on-secondary shadow-(--box-shadow-on-primary) hover:shadow-(--box-shadow-tertiary)",
        "secondary-reversed": "bg-on-secondary text-secondary shadow-(--box-shadow-on-primary) hover:shadow-(--box-shadow-tertiary)",
        "on-secondary": "bg-primary text-on-secondary shadow-(--box-shadow-on-secondary) hover:shadow-(--box-shadow-tertiary)",
        "simple-link": "bg-transparent text-on-tertiary hover:text-on-primary",
        }
        

    },
})