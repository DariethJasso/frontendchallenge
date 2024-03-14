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

    // Expresión regular para verificar la URL con cualquier número después de '/twitter/'
    const profileRegex = /^\/twitter\/\d+\/profile$/;

    return (
        <div className="sm:flex ">
            <Drawer/>
            {children}
            <section className="hidden gap-3 bg-black sm:flex md:w-[175px]  sm:h-screen sm:min-w-[80px] sm:max-w-[100px] md:max-w-[200px] lg:h-auto lg:w-screen lg:max-w-[400px] lg:flex-col lg:items-center xl:max-w-[700px] xl1:w-screen ">
                <div className="pt-14"></div>
                {
                    pathName === '/twitter' || pathName === '/twitter/siguiendo' ? (
                        <>
                            <Search />
                            <Prime />
                            <Top />
                            <Users />
                        </>
                    ) : pathName === '/twitter/notification' ? (
                        <>
                            <Search />
                            <Top />
                            <Users />
                        </>
                    ) : pathName === '/twitter/explore' ? (
                        <>
                            <Users />
                        </>
                    ) : profileRegex.test(pathName) ? (
                        <>
                            <Users />
                            <Top />
                        </>
                    ) : null
                }
            </section> 
        </div>
    );
}
