import { Link } from "@inertiajs/react";

export default function ApplicationLogo() {
    return (
        <Link href={route("foxes")}>
            <img
                src="
            https://i.imgur.com/wQveEl1.png
            "
            />
        </Link>
    );
}
