import { ButtonHTMLAttributes } from "react";

export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `text-white uppercase underline hover:no-underline hover:border hover:border-orange-400 hover:text-orange-400 rounded-lg px-2 py-2 duration-300 border border-transparent ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
