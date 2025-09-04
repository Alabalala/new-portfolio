import { tv } from "tailwind-variants";

export const buttonVariants = tv({
    base: "px-4 transition-colors font-bebas text-2xl text-center",
    variants: {
        buttonVariant: 
        {
        primary: "bg-primary text-on-primary shadow-primary box-shadow-on-primary",
        secondary: "bg-secondary text-on-secondary shadow-(--box-shadow-on-primary)",
        "secondary-reversed": "bg-on-secondary text-secondary shadow-(--box-shadow-on-primary)",
        "on-secondary": "bg-primary text-on-secondary shadow-(--box-shadow-on-secondary)",
        "simple-link": "bg-transparent text-on-tertiary",
        }
        

    },
})