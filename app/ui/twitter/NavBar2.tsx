import { faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faBookmark, faList } from "@fortawesome/free-solid-svg-icons"
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export function NavBar2() {
    const Link2 = [
        {
            name:"Lista Fijadas",
            url:"/twitter/listaFijada",
            icon: faList
        },
        {
            name:"Guardados",
            url:"/twitter/guardados",
            icon: faBookmark
        },
        {
            name:"Comunidades",
            url:"/twitter/comunidades",
            icon:faUserGroup
        },
        {
            name:"Premium",
            url:"/twitter/premium",
            icon: faXTwitter
        },
        {
            name:"Perfil",
            url:"/twitter/perfil",
            icon:faUser
        }


    ]
    return (
        <nav className="hidden">
            <ul className="flex flex-col items-center">
                {
                    Link2.map((link) => (
                        <div key={link.name} className="flex items-center gap-2 text-2xl text-white" >
                             <FontAwesomeIcon className="w-6" icon={link.icon}/>
                            <Link className="" href={link.url}>{link.name}</Link>
                        </div>
                    ))
                }
            </ul>
        </nav>
    )
}