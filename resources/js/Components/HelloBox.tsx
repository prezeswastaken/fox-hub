import { Link } from "@inertiajs/react";
import { ReactElement, ReactNode } from "react";

export function HelloBox() {
    return (
        <div className="text-white font-mono group flex flex-col text-3xl">
            <p>
                Please{" "}
                <Link href="/login" className="hover:text-orange-400 underline">
                    login
                </Link>{" "}
                or{" "}
                <Link
                    href="/register"
                    className="hover:text-orange-400 underline"
                >
                    create
                </Link>{" "}
                your account before you continue
            </p>
            <div className="flex justify-center mt-2 group-hover:scale-100 scale-0 duration-300">
                <p className="text-2xl">(it's worth it - trust me ...)</p>
            </div>
        </div>
    );
}
