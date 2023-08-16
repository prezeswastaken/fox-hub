import { Link } from "@inertiajs/react";
import React from "react";
export function ProfileEditOrLogout() {
    return (
        <div className="flex flex-col gap-10">
            <Link
                href={route("logout")}
                method="post"
                as="button"
                className="flex flex-row-reverse gap-5 justify-center group"
            >
                <p className="text-3xl text-right rounded-full">📴</p>
                <p className="duration-300 scale-0 group-hover:scale-100">
                    Are you sure you wanna logout?
                </p>
            </Link>

            <Link href={route("profile.edit")} className="text-right">
                <p>Edit your profile</p>
            </Link>
        </div>
    );
}
