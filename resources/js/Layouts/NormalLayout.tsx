import TopPanel from "@/Components/TopPanel";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function NormalLayout({ children }: Props) {
    return (
        <div className="flex flex-col text-white p-5 bg-black min-h-screen font-mono">
            <TopPanel />

            <div className="flex justify-center">{children && children}</div>
        </div>
    );
}
