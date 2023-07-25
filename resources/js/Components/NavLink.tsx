import { Link, InertiaLinkProps } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                "uppercase text-lg inline-flex items-center px-1 pt-1 border-b-2 font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "border-orange-400 text-white focus:border-indigo-700 duration-300 shadow-sm"
                    : "border-transparent text-white hover:text-orange-400 hover:border-orange-400  duration-300") +
                className
            }
        >
            {children}
        </Link>
    );
}
