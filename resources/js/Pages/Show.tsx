import NormalLayout from "@/Layouts/NormalLayout";

type Photo = {
    url: string;
};

type Props = {
    photos: Array<Photo>;
};

export default function Show({ photos }: Props) {
    const photosObject = photos.map((photo) => (
        <div className="w-52 h-52 rounded">
            <img src={photo.url} />
        </div>
    ));
    return (
        <>
            <NormalLayout>
                <div className="grid grid-cols-3 grid-rows-3 gap-4">
                    {photosObject}
                </div>
            </NormalLayout>
        </>
    );
}
