
import Link from "next/link";
import Avatar from "./Avatar";
import { Divider } from "@nextui-org/react";

const Links1 = [
    {
        name:"Cuenta",
        url:"/"
    },
    {
        name:"Centro de ayuda",
        url:"/"
    },
    {
        name:"Cerrar sesión en Netflix",
        url:"/"	
    }
]

const Links2=[
    {
        name:"Inicio",
        url:"/"
    },
    {
        name:"Mi Lista",
        url:"/"
    },
    {
        name:"Thrillers",
        url:"/"
    },
    {
        name:"Peliculas y Series",
        url:"/"
    },
    {
        name:"latinoamericanas",
        url:"/"
    },
    {
        name:"Peliculas y series Mexicanas",
        url:"/"
    },
    {
        name:"Para ver en familia",
        url:"/"
    },
    {
        name:"Peliculas y programas",
        url:"/"
    },
    {
        name:"Internacionales",
        url:"/"
    },
    {
        name:"Reality Shows",
        url:"/"
    },
    {
        name:"Accion",
        url:"/"
    },
    {
        name:"Anime",
        url:"/"
    },
    {
        name:"Comedias",
        url:"/"
    },
    {
        name:"Fantasía",
        url:"/"
    },
    {
        name:"Sci-fi",
        url:"/"
    },
    {
        name:"Terror",
        url:"/"
    },
    {
        name:"Comedia de stand up",
        url:"/"
    },
    {
        name:"Documentales",
        url:"/"
    },
    {
        name:"Peliculas y programas",
        url:"/"
    },
    {
        name:"Policiales",
        url:"/"
    }
]
export default function Aside(){
    return (
        <aside className="bg-black w-[250px] h-auto fixed left-0 top-12 bottom-0 z-50 ">
            <article>
                <div className="flex items-center gap-2 p-3">
                    <Avatar img="https://scontent.ftpq2-1.fna.fbcdn.net/v/t39.30808-1/414692329_1684501038710323_301892290143777707_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEMOP-6eD5Kcvh7ZTiVRKs2SKMlXnQWyc1IoyVedBbJzVR8s5aeYB25hdXpAAiLLxcjSRS8uzrxXIywbiX3RlrN&_nc_ohc=HlQ-M_N_cbwAX-OzTYK&_nc_ht=scontent.ftpq2-1.fna&oh=00_AfAtAnKz3HVsQ8ZpSnYrEccIOcfYTFe6RJ_FuWUaVkqcUw&oe=65F3A26D" name="Darieth Jasso"/>
                    <div className="flex flex-col ">
                        <h2 className="text-white font-bold">Darieth</h2>
                        <p className="text-gray-400 hover:text-white">Cambiar perfiles</p>
                    </div>
                </div>
                <div className="p-3 flex flex-col text-gray-400 font-semibold">
                    {
                        Links1.map((item)=>{
                            return (
                                <Link key={item.name} href={item.url} className="hover:text-white">{item.name}</Link>
                            )
                        })
                    }
                </div>
            </article>
            <hr className="bg-gray-600" />
            <article className="p-3 flex flex-col gap-2 text-gray-400 font-semibold">
                {
                    Links2.map((item)=>{
                        return (
                            <Link key={item.name} href={item.url} className="hover:text-white">{item.name}</Link>
                        )
                    })
                }

            </article>
        </aside>
    )
}