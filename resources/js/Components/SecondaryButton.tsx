import { ButtonHTMLAttributes } from "react";

export default function SecondaryButton({
    type = "button",
    className = "",
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            type={type}
            className={
                `inline-flex items-center px-4 py-2 bg-orange-400  border
                border-gray-300  rounded-md text-white font-mono hover:font-semibold
                uppercase tracking-widest shadow-sm hover:bg-orange-500
                focus:outline-none focus:ring-2 focus:ring-indigo-500
                focus:ring-offset-2  disabled:opacity-25 transition ease-in-out
                duration-300 ${disabled && "opacity-25"} ` + className
            }
            disabled={disabled}
        >
            {" "}
            {children}{" "}
        </button>
    );
}
