import NormalLayout from "@/Layouts/NormalLayout";

type Props = {
    photoLink: string;
};

export default function Dashboard({ photoLink }: Props) {
    // I did this
    return (
        <NormalLayout>
            <div className="flex px-5">
                <p>You logged in! Finally...</p>
            </div>
            <div className="flex justify-center  p-5 max-w-fit self-center">

                <div className="flex flex-col p-5 justify-center">
                    {photoLink}
                    <img
                        src={photoLink}
                        className="max-h-80 max-w-sm"
                        alt="No foxes for you today!"
                    />
                </div>

            </div>
        </NormalLayout>
    );
}
