'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FourYou() {
    const pathname = usePathname();
    return (
        <div className="border-b-1 border-gray-300/25 flex justify-center">
            <Link className="w-[50%] h-[50px] text-center flex flex-col items-center gap-2 pt-3 hover:bg-gray-300/10" href="/twitter">
                <p className={`text-gray-400  ${pathname === '/twitter' ? 'text-white font-bold' : ''}`}>Para ti</p>
                <hr className={`w-[60px] h-1 bg-blue-500 rounded-md border-none ${pathname === '/twitter' ? 'flex' : 'hidden'}`}/>

            </Link>
            <Link className="w-[50%] h-[50px] text-center flex flex-col items-center gap-2 pt-3 hover:bg-gray-300/10" href="/twitter/siguiendo">
                <p className={`text-gray-400 ${pathname === '/twitter/siguiendo' ? 'text-white font-bold' : ''}`}>Siguiendo</p>
                <hr className={`w-[60px] h-1 bg-blue-500 rounded-md border-none ${pathname === '/twitter/siguiendo' ? 'flex' : 'hidden'}`}  />
            </Link>
        </div>
    )
}