import PrimaryButton from "./PrimaryButton";

export function GetNewPhotoMenu() {

    return (
        <div className="flex flex-col justify-evenly items-center max-h-full min-h-full h-60 px-5 bg-[#292929] shadow-black shadow-md">
            <PrimaryButton>
                <p>NEXT fox</p>
            </PrimaryButton>

            <PrimaryButton>
                <p>NEXT fox</p>
            </PrimaryButton>
        </div>
    );
}
