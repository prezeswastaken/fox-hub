import { usePage } from "@inertiajs/react";

type Flash = {
    message: String;
};

export default function FlashMessage() {
    const { flash } = usePage().props;
    return (
        <div className="flex px-5 ml-10">
            <p>{flash.message}</p>
        </div>
    );
}
