'use client'
import { usePathname } from "next/navigation";
import Drawer from "../ui/twitter/Drawer";
import Prime from "../ui/twitter/Prime";
import Search from "../ui/twitter/Search";
import Top from "../ui/twitter/Top";
import Users from "../ui/twitter/Users";
import { User } from "@nextui-org/react";


export default function NetflixLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const pathName = usePathname();
    return (
        <div className="sm:flex ">
            <Drawer/>
            {children}
            <section className="hidden gap-3 bg-black sm:flex  sm:h-screen sm:min-w-[80px] sm:max-w-[100px] lg:h-auto lg:w-screen lg:max-w-[400px] lg:flex-col lg:items-center xl:max-w-[700px] xl1:w-screen ">
                <div className="pt-14">

                </div>
                {
                    pathName === '/twitter' || pathName === '/twitter/siguiendo' ? (
                        <>
                            <Search />
                            <Prime />
                            <Top />
                            <Users />
                        </>
                    ) : pathName === '/twitter/notification' ?
                    (
                        <>
                            <Search />
                            <Top />
                            <Users />
                        </>
                    ):
                    pathName === '/twitter/explore' ? 
                    (
                        <>
                            <Users />
                        </>
                    )
                    :null
                }
            </section> 
        </div>
    )
}