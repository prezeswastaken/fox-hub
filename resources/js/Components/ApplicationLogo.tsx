import { Link } from "@inertiajs/react";

export default function ApplicationLogo() {
    return (
        <Link href={route("dashboard")}>
            <img
                src="
            https://i.imgur.com/wQveEl1.png
            "
            />
        </Link>
    );
}
