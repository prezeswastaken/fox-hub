import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import NormalLayout from "@/Layouts/NormalLayout";
import { Link } from "@inertiajs/react";

type Photo = {
    url: string;
    id: number;
};

type Props = {
    photos: Array<Photo>;
};

export default function Show({ photos }: Props) {
    const photosObject = photos.map((photo) => (
        <div className="flex overflow-hidden relative justify-center items-center w-80 h-80">
            <img
                src={photo.url}
                className="flex object-cover flex-col justify-end w-80 h-80 rounded"
            />
            <div className="flex absolute bottom-0 left-0 justify-between items-center py-2 px-2 w-full bg-gray-500 bg-opacity-50">
                <PrimaryButton>
                    <Link
                        preserveScroll
                        method="delete"
                        href={route("foxes.destroy", photo.id)}
                    >
                        delete
                    </Link>
                </PrimaryButton>
                <PrimaryButton>
                    <Link method="get" href={route("foxes.index")} as="button">
                        chuj
                    </Link>
                </PrimaryButton>
            </div>
        </div>
    ));
    return (
        <>
            <NormalLayout>
                <div className="flex justify-center">
                    <div className="grid grid-cols-3 gap-20">
                        {photosObject}
                    </div>
                </div>
            </NormalLayout>
        </>
    );
}
