'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faList,faSearch,faBell } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import {Badge} from "@nextui-org/react"
import List from "./List"
import Avatar from "./Avatar"
import Link from "next/link"
import Aside from "./Aside"
export default function NavBar(){
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) { // ajusta este valor según necesites
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
    <div className={`bg-black sm:bg-transparent flex justify-between py-3 px-3 sm:pl-10 items-center fixed top-0 w-full z-50 ${isSticky ? ' md:bg-black' : ''}`}>
      <div className="flex gap-2">
        <FontAwesomeIcon icon={faList} className="text-white text-2xl sm:hidden" onClick={() => setShowMenu(!showMenu)} />
        {
          showMenu ? (
            <Aside/>
          ):''
        }
        <img className="w-[100px] h-[25px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
        <List/>
      </div>
        <input type="text" placeholder="Buscar" className="w-[130px] h-[30px] border bg-[#222222] p-1 sm:hidden" />
      <div className="sm:flex gap-3 items-center pr-8 hidden">
        <FontAwesomeIcon icon={faSearch} className="text-white text-2xl" />
        
        <Link href="/" className="text-white">Niños</Link>
          <Badge color="danger" content={4} shape="circle">
            <FontAwesomeIcon icon={faBell} className="transition duration-300 text-white text-2xl fill-current"/>
        </Badge>
        
        <Avatar img="https://scontent.ftpq2-1.fna.fbcdn.net/v/t39.30808-1/414692329_1684501038710323_301892290143777707_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEMOP-6eD5Kcvh7ZTiVRKs2SKMlXnQWyc1IoyVedBbJzVR8s5aeYB25hdXpAAiLLxcjSRS8uzrxXIywbiX3RlrN&_nc_ohc=HlQ-M_N_cbwAX-OzTYK&_nc_ht=scontent.ftpq2-1.fna&oh=00_AfAtAnKz3HVsQ8ZpSnYrEccIOcfYTFe6RJ_FuWUaVkqcUw&oe=65F3A26D" name="Darieth Jasso"/>
            

        
      </div>
    </div>
  )
}