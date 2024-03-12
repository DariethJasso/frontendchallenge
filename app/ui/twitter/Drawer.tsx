'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar1 from "./NavBar1";
import { NavBar2 } from "./NavBar2";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Avatar } from "@nextui-org/react";
import { faFeather, faGear } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


export default function Drawer(){
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 30) { // ajusta este valor según necesites
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Limpiar el event listener al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="bg-black w-full">
            <div className={`flex justify-center p-2 h-[50px] ${isSticky ? 'hidden' : ''}`}>
                <FontAwesomeIcon icon={faXTwitter} className="text-white text-2xl" />
            </div>
            <div>
                <NavBar1 sticky={isSticky}  />
                <NavBar2 />
            </div>
            <div className={`fixed bottom-0 top-0 p-2 flex justify-between w-full h-[50px] ${isSticky ? 'hidden' : ''}`}>
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="sm" />
                <button className=" w-6 h-6 m-2 hover:bg-white/30 rounded-full"><FontAwesomeIcon color="white" className=" p-1" icon={faGear} /></button>
            </div>
            <button className={`fixed bottom-14 right-0 w-[50px] h-[50px] bg-[#1d9bf0] rounded-full mr-4 ${isSticky ? 'opacity-40' : ''}`}><FontAwesomeIcon color="white" className=" p-1" icon={faFeather} /></button>
        </div>
    )
}