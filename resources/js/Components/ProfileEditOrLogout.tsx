import { Link } from "@inertiajs/react";
import React from "react";
export function ProfileEditOrLogout() {
    return (
        <div className="flex flex-col gap-10">
            <Link
                href={route("logout")}
                method="post"
                as="button"
                className="flex flex-row-reverse group gap-5 justify-center"
            >
                <p className="text-right text-3xl rounded-full">📴</p>
                <p className="scale-0 group-hover:scale-100 duration-300">
                    Are you sure you wanna logout?
                </p>
            </Link>

            <Link href={route("profile.edit")} className="text-right">
                <p>(user avatar)</p>
            </Link>
        </div>
    );
}
