import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import NormalLayout from "@/Layouts/NormalLayout";

export default function Dashboard({ auth }: PageProps) {
    return <NormalLayout>You logged in! Finally...</NormalLayout>;
}
