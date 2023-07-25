import { Link } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";
import NavLink from "./NavLink";

export default function TopPanel() {
    return (
        <div className="flex flex-col p-5 m-5 gap-5">
            <div className="flex justify-between bg-red items-center">
                <ApplicationLogo />

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
            </div>
            <div className="flex px-20 gap-20">
                <NavLink
                    href={route("dashboard")}
                    active={route().current("dashboard")}
                >
                    Home
                </NavLink>
                <NavLink
                    href={route("profile.edit")}
                    active={route().current("profile.edit")}
                >
                    Profile
                </NavLink>
            </div>
        </div>
    );
}
