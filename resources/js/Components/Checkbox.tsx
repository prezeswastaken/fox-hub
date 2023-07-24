import { InputHTMLAttributes } from "react";

export default function Checkbox({
    className = "",
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                "rounded bg-black border-orange-400 text-orange-400 shadow-sm focus:ring-orange-500  " +
                className
            }
        />
    );
}
