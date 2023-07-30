import { GetNewPhotoMenu } from "@/Components/GetNewPhotoMenu";
import NormalLayout from "@/Layouts/NormalLayout";

type Props = {
    photoLink: string;
};

export default function Dashboard({ photoLink }: Props) {
    return (
        <NormalLayout>
            <div className="flex px-5">
                <p>You logged in! Finally...</p>
            </div>
            <div className="flex justify-center  p-5 max-w-fit self-center items-center">
                <div className="flex flex-col py-5 justify-center bg-[#1B1B1B] px-10">
                    <div className="flex justify-center max-h-fit max-w-fit items-center gap-20">
                        <div className="w-96 h-96 flex items-center justify-center">
                            <img
                                src={photoLink}
                                className="max-h-80 max-w-sm shadow-lg shadow-black"
                                alt="No foxes for you today!"
                            />
                        </div>
                        <GetNewPhotoMenu/>
                    </div>
                </div>
            </div>
        </NormalLayout>
    );
}
