import { plusJakarta } from "../lib/fonts";
import Content from "../ui/notification/content";
import Head from "../ui/notification/head";

export default function Notification(){
    return (
        <main className={`${plusJakarta.className}} sm:flex sm:min-h-screen sm:flex-col sm:items-center sm:justify-between sm:p-24`}>
            <div className="bg-white p-4 flex flex-col gap-2 border md:w-[400px] rounded-xl h-screen sm:h-auto">
                <Head />
                <Content />
            </div>
        </main>
    )
}