import Link from "next/link";


export default function List() {
    const Links = [
        {
            name: "Inicio",
            url: "/"
        },
        {
            name: "Series",
            url: "/"
        },
        {
            name: "Peliculas",
            url: "/"
        },
        {
            name:"Novedades populares",
            url:"/"
        },
        {
            name:"Mi lista",
            url:"/"
        },
        {
            name:"Explora por idiomas",
            url:"/"
        }
    ]
    return (
        <nav className="hidden sm:flex">
            <ul className=" pl-8 flex gap-3">
                {
                    Links.map((item, index) => {
                        return (
                           <Link href={item.url} key={index} className="text-white hover:text-gray-300">{item.name}</Link>
                        );
                    })
                }
            </ul>
        </nav>
    )
}