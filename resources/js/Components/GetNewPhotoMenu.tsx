import { router } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { useEffect, useState } from "react";

type Props = {
    photoLink: String;
};

export function GetNewPhotoMenu({ photoLink }: Props) {
    function handleClick() {
        router.reload();
    }

    //const values = {
    //   //url: "hellohaha.png",
    //    url: photoLink,
    // };

    const [values, setValues] = useState({
        url: photoLink,
    });

    useEffect(() => {
        setValues({ url: photoLink });
    }, [photoLink]);

    function handleSave() {
        router.post("/foxes/store", values);
    }

    return (
        <div className="flex flex-col justify-evenly items-center max-h-full min-h-full h-60 px-5 bg-[#292929] shadow-black shadow-md">
            <PrimaryButton onClick={handleClick}>
                <p>NEXT fox</p>
            </PrimaryButton>

            <SecondaryButton type="button" onClick={handleSave}>
                <p>save</p>
            </SecondaryButton>
        </div>
    );
}
