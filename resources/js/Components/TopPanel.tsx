import { ProfileEditOrLogout } from "./ProfileEditOrLogout";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";
import NavLink from "./NavLink";

export default function TopPanel() {
    return (
        <div className="flex flex-col p-5 m-5 gap-5">
            <div className="flex justify-between bg-red items-center">
                <ApplicationLogo />

                <ProfileEditOrLogout />
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
                    Get new foxes!
                </NavLink>
                <NavLink
                    href={route("profile.edit")}
                    active={route().current("profile.edit")}
                >
                    Your foxes
                </NavLink>
            </div>
        </div>
    );
}
