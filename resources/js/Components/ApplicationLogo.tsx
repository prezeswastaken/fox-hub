import { Link } from "@inertiajs/react";

export default function ApplicationLogo() {
    return (
        <Link href={route("dashboard")}>
            <img src="https://i.imgur.com/Qc0tHPl.png" />
        </Link>
    );
}
