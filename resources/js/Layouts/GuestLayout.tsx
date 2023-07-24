import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import { HelloBox } from "@/Components/HelloBox";

export default function Guest({ children }: PropsWithChildren) {
    let x: number;
    return (
        <div
            className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0
        bg-black gap-1
        "
        >
            <div className="max-w-xs max-h-md mb-5">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/012/042/309/original/stop-sign-icon-transparent-background-png.png"
                    alt=""
                />
            </div>

            <HelloBox />

            {children && (
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 border border-gray-800 shadow-lg shadow-gray-800 overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            )}
        </div>
    );
}
