import FlashMessage from "@/Components/FlashMessage";
import { GetNewPhotoMenu } from "@/Components/GetNewPhotoMenu";
import NormalLayout from "@/Layouts/NormalLayout";

type Props = {
    photoLink: string;
};

export default function Dashboard({ photoLink }: Props) {
    return (
        <NormalLayout>
            <div className="flex justify-center items-center self-center p-5 max-w-fit">
                <div className="flex flex-col py-5 justify-center bg-[#1B1B1B] px-10">
                    <div className="flex gap-20 justify-center items-center max-h-fit max-w-fit">
                        <div className="flex justify-center items-center w-96 h-96">
                            <img
                                src={photoLink}
                                className="max-w-sm max-h-80 shadow-lg shadow-black"
                                alt="Error loading image, try again!"
                            />
                        </div>
                        <GetNewPhotoMenu photoLink={photoLink} />
                    </div>
                </div>
            </div>
        </NormalLayout>
    );
}
