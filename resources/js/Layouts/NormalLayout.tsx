import FlashMessage from "@/Components/FlashMessage";
import TopPanel from "@/Components/TopPanel";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function NormalLayout({ children }: Props) {
    return (
        <div className="flex flex-col p-5 min-h-screen font-mono text-white bg-black">
            <TopPanel />

            <div className="flex flex-col p-5">
                <FlashMessage />
                {children && children}
            </div>
        </div>
    );
}
