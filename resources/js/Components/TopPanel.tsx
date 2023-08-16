import { ProfileEditOrLogout } from "./ProfileEditOrLogout";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";
import NavLink from "./NavLink";

export default function TopPanel() {
    return (
        <div className="flex flex-col gap-5 p-5 m-5">
            <div className="flex justify-between items-center bg-red">
                <ApplicationLogo />

                <ProfileEditOrLogout />
            </div>
            <div className="flex gap-20 px-20">
                <NavLink
                    href={route("foxes.index")}
                    active={route().current("foxes.index")}
                >
                    Home
                </NavLink>
                <NavLink
                    href={route("foxes.show")}
                    active={route().current("foxes.show")}
                >
                    Your foxes
                </NavLink>
            </div>
        </div>
    );
}
