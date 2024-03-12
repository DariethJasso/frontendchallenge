import { faMessage } from "@fortawesome/free-regular-svg-icons"
import { faBell, faHome, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function NavBar1({sticky}: {sticky: boolean}) {

    const Link1 = [
        {
            name: "Inicio",
            url:"/twitter",
            icon: faHome
        },
        {
            name: "Explora",
            url:"/twitter/explora",
            icon: faSearch
        },
        {
            name: "Notificaciones",
            url:"/twitter/notificaciones",
            icon: faBell
        },
        {
            name:"Mensajes",
            url:"/twitter/mensajes",
            icon: faMessage
        }
    ]
    return (
        <nav className={`bg-black h-[45px] fixed bottom-0 left-0 w-full ${sticky ? 'opacity-40' : ''}`}>
            <ul className="flex sm:flex-col justify-around items-center h-full">
                {
                    Link1.map((link) => (
                        <Link className="flex  text-2xl text-white hover:bg-white/25 hover:rounded-full hover:p-2" href={link.url} key={link.name}><FontAwesomeIcon icon={link.icon} /><p className="hidden">{link.name}</p></Link>
                       
                    ))
                }
            </ul>
        </nav>
    )
}