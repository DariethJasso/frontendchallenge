import Carousel from "../ui/netflix/Carousel";
import Header from "../ui/netflix/Header";

const images2 = [
    {
        name: "Halloween Kills",
        image: "https://occ-0-7215-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQNdst20k-MzHG_TbQcWbI2JlM7fAFYT6Uilg6k-gVnrKWiJcClhulR-u8oYvds0XY6MnmrZE8-r3nhR4CRBWqE5mnEBs9VkqgQ.webp?r=ec3",
        rating: 90,
        synopsis: "Después de ser dado por muerto, Michael Myers regresa para aterrorizar nuevamente la ciudad de Haddonfield.",
        genres: ["Horror", "Thriller"],
        duration: "1h 45min",
        classification: "R",
        resolution: "HD",
        isSeries: false
    },
    {
        name: "Damsel",
        image: "https://occ-0-7215-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZI3BNJrGeywrFc7ddS__edeCKgekC3atJYTUKG2x3yLvJOpum0aIRgEuoqCqGUTwOJvpRc2bAINn6kZH_CSD1Sw8yc1zAKpQ6Zt97MDd8UDNx8OLMXMC03JAzhSi8ItN-yr5KTGJ3eW6tdqY0MmF8ma5NZWsuTcNnPvTGkvIPCANrKVjDtjE4BHJgEy0m4.jpg?r=5a4",
        rating: 67,
        synopsis: "Un hombre va en busca de su amor en el Oeste Americano, con la ayuda de un par de ineptos.",
        genres: ["Comedy", "Western"],
        duration: "1h 53min",
        classification: "PG-13",
        resolution: "HD",
        isSeries: false
    },
    {
        name: "Nana",
        image: "https://occ-0-7215-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABejS3iNgmn_3Z7N5bYkmbDR8VlhcdHTo09kVzeEDvyCpzbGAe3_FUUelVZLBllzBf0Gh15ZrOi91HSg6sgWTDMV74HyEclFNzxg.webp?r=61a",
        rating: 67,
        synopsis: "Una mujer joven comienza a trabajar como niñera en una casa de familia, donde descubre oscuros secretos que amenazan con desentrañar su cordura.",
        genres: ["Thriller", "Mystery"],
        duration: "1h 38min",
        classification: "R",
        resolution: "HD",
        isSeries: false
    },
    {
        name: "La señal",
        image: "https://occ-0-7215-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaK0Nuqjvby3yRDWJ2nAk_FfY7aKp38eXm4ytJ_kaKYx6WnuBkjOmziO4pmW_KQyuenrF-CE-ml65fNkgiH23hlfxgP7UXXuhGqP9vUQFhbOuH1RdHEEfu3mO3VflxlU1s05wIbRCyvDJxrcYTkaXGhTl5zuYMsD5hriiRabvmCzaUex4ukNyrUk6gpuPRo.jpg?r=e98",
        rating: 98,
        synopsis: "Un grupo de amigos se ven envueltos en una serie de extraños eventos después de recibir una misteriosa señal en sus teléfonos celulares.",
        genres: ["Sci-Fi", "Mystery"],
        duration: "2h 5min",
        classification: "PG-13",
        resolution: "HD",
        isSeries: false
    },
    {
        name: "Los Caballeros",
        image: "https://occ-0-7215-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWBrvxeHoJI3XyD0A2i8Lf5Jspy3lAomFV7WhE37BLAYeaPB7jKXlMg2UZvagxvAAI2d1KsyEmuLQKBYpQ1ppNuEfhc20nM31NSVyuRERnhpHa1UBlefIMfg_JVLGUJcKqcV6B_H74S34YnOREt-_KGcPz3-6-IvGEc5yEtTfB8udDjDPZ4T7EwCea09hk4.jpg?r=28c",
        rating: 79,
        synopsis: "Un hombre estadounidense en busca de dinero fácil se encuentra atrapado en una conspiración criminal en medio del Londres contemporáneo.",
        genres: ["Action", "Comedy"],
        duration: "1h 53min",
        classification: "R",
        resolution: "HD",
        isSeries: false
    },
    {
        name: "Jovenes Altezas",
        image: "https://occ-0-7215-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABarRLSj8ZEhI6_TE9HDrfMc2ZojmyLTWfEwKq__SdMypfzrnH-r350zunYJVtjrqwq4EZN7cS8eac2INvIfqq6GNPq-znqn8PRoNr5oTQQV-qhjqTi2szckiTxO_SEszIZaAis_nvmJlaCSDAQsnvZ-vwAGPBGnp2CZ_TuW9xT0AgWMypgRACe1lp3-7hI-8b-IuOB5MwRoGCeSwUbSwUcFqGBbSfIaR72IFKiqwpMdHRIMVobazdG1U6duEf1b1dHWau5BGDFLRMTiVkF0XvXy_svzWjdXPwV73MZ3dl3YYNV8x9cXdqT9Eaw.jpg?r=51e",
        rating: 90,
        synopsis: "En un reino imaginario, cuatro jóvenes nobles se embarcan en una peligrosa misión para salvar a su reino de la destrucción.",
        genres: ["Fantasy", "Adventure"],
        duration: "2h 10min",
        classification: "PG-13",
        resolution: "HD",
        isSeries: false
    },
    {
        name: "City of Lies",
        image: "https://occ-0-7215-3996.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfduNmgzdfoDbVeGXjaoOsdwzYrag7A-AZC1WQfKPWf8c6PymDfYwem5SAkdvy-n7tMWVUzq2ls0AZ_q4s4aiyj8F_dC1m4cupo.webp?r=c1b",
        rating: 80,
        synopsis: "Un periodista investiga los asesinatos de Tupac Shakur y The Notorious B.I.G. y descubre una conspiración que se extiende más allá de lo que jamás hubiera imaginado.",
        genres: ["Crime", "Drama", "Mystery"],
        duration: "2h 12min",
        classification: "R",
        resolution: "HD",
        isSeries: false
    },
    {
        name: "Stranger Things",
        image: "https://occ-0-7215-3996.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYW_biw5qDbRciaUARr869zigCAlT4BEUJEkdsVEHSdE5nVXfWe0LMsl8LX6nhRlKdJhmVoYALI2Qz5Xu933fknR96goptGJrie4_aPD1TP0VT-k2fiT7YJ0Wzw0-zGutXYE.jpg?r=e60",
        rating: 86,
        synopsis: "Cuando un joven desaparece, su madre, el jefe de policía y sus amigos deben enfrentar fuerzas terroríficas para traerlo de vuelta.",
        genres: ["Drama", "Fantasy", "Horror"],
        duration: "50min por episodio",
        classification: "TV-14",
        resolution: "4K",
        isSeries: true,
        seasons: 4
    }
    // Puedes agregar más objetos con información adicional según sea necesario
];

const images3 = [
    {
        "name": "Spider-Man: Sin Camino a Casa",
        "image": "https://occ-0-7215-3996.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWrCzpJuXIAT71b1c-xXxS-x_bUR8nc1n2SgDfKXXHG4jR9w_52BrvrokEgObRTqim3fcqsxQW1t_Rv_JP_cxNncPxsF9W4vxWo.webp?r=8e7",
        "rating": 92,
        "synopsis": "Peter Parker lucha por mantener su identidad secreta mientras enfrenta a múltiples villanos de realidades alternativas.",
        "genres": ["Acción", "Aventura", "Fantasía"],
        "duration": "2h 28min",
        "classification": "PG-13",
        "resolution": "HD",
        "isSeries": false
    },
    {
        "name": "Jungle Cruise",
        "image": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F3A06E15EE141CF4BAC34B4FAB7FBE5F7E3757D0CE5EDF869800FA6A862D9368/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp",
        "rating": 78,
        "synopsis": "Un capitán y una científica se embarcan en una expedición en la selva amazónica en busca de un árbol con propiedades curativas.",
        "genres": ["Acción", "Aventura", "Comedia"],
        "duration": "2h 7min",
        "classification": "PG-13",
        "resolution": "HD",
        "isSeries": false
    },
    {
        "name": "Matrix Resurrections",
        "image": "https://peru21.pe/resizer/g66OjtPDGnSyQA5Q4og_vh-7QeE=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/4D72MVHFM5HT3KXEOKZED6DOX4.webp",
        "rating": 85,
        "synopsis": "Neo despierta en una realidad que no reconoce y debe enfrentar su destino para salvar a la humanidad de las máquinas.",
        "genres": ["Acción", "Ciencia Ficción"],
        "duration": "2h 28min",
        "classification": "R",
        "resolution": "4K",
        "isSeries": false
    },
    {
        name: "City of Lies",
        image: "https://occ-0-7215-3996.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfduNmgzdfoDbVeGXjaoOsdwzYrag7A-AZC1WQfKPWf8c6PymDfYwem5SAkdvy-n7tMWVUzq2ls0AZ_q4s4aiyj8F_dC1m4cupo.webp?r=c1b",
        rating: 80,
        synopsis: "Un periodista investiga los asesinatos de Tupac Shakur y The Notorious B.I.G. y descubre una conspiración que se extiende más allá de lo que jamás hubiera imaginado.",
        genres: ["Crime", "Drama", "Mystery"],
        duration: "2h 12min",
        classification: "R",
        resolution: "HD",
        isSeries: false
    },
    {
        name: "Stranger Things",
        image: "https://occ-0-7215-3996.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYW_biw5qDbRciaUARr869zigCAlT4BEUJEkdsVEHSdE5nVXfWe0LMsl8LX6nhRlKdJhmVoYALI2Qz5Xu933fknR96goptGJrie4_aPD1TP0VT-k2fiT7YJ0Wzw0-zGutXYE.jpg?r=e60",
        rating: 86,
        synopsis: "Cuando un joven desaparece, su madre, el jefe de policía y sus amigos deben enfrentar fuerzas terroríficas para traerlo de vuelta.",
        genres: ["Drama", "Fantasy", "Horror"],
        duration: "50min por episodio",
        classification: "TV-14",
        resolution: "4K",
        isSeries: true,
        seasons: 4
    },
    {
        "name": "Mindhunter",
        "image": "https://occ-0-7215-3996.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcb9ek17Cp8uOFUhxiaaSfsGOJsKHG0BOo_wCnEy8YoMJHc7lIXkFCij7XnE7D8XluV7lRMZDR7Vj8R3p-7yIbrv73yWtbniGotZZsFHt6TCofOApuGV9u5oaNDMVmEvtwwQ.jpg?r=5c0",
        "rating": 90,
        "synopsis": "Dos agentes del FBI revolucionan los métodos de investigación criminal mientras persiguen a asesinos en serie.",
        "genres": ["Crimen", "Drama", "Thriller"],
        "duration": "50min por episodio",
        "classification": "TV-MA",
        "resolution": "4K",
        "isSeries": true,
        "seasons": 2
    },
    {
        "name": "The Undoing",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQh0KTZbVULw_CeNOwIKCbWVx7ZQLYjvAmYPoWl7TVMh2Nrp58yBjwR4XQh2K6V-yt0wI&usqp=CAU",
        "rating": 85,
        "synopsis": "Una terapeuta enfrenta las verdades oscuras de su esposo y su propia vida cuando surge un asesinato en su comunidad.",
        "genres": ["Drama", "Misterio", "Thriller"],
        "duration": "1h por episodio",
        "classification": "TV-MA",
        "resolution": "4K",
        "isSeries": true,
        "seasons": 1
    },
    {
        name: "La señal",
        image: "https://occ-0-7215-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaK0Nuqjvby3yRDWJ2nAk_FfY7aKp38eXm4ytJ_kaKYx6WnuBkjOmziO4pmW_KQyuenrF-CE-ml65fNkgiH23hlfxgP7UXXuhGqP9vUQFhbOuH1RdHEEfu3mO3VflxlU1s05wIbRCyvDJxrcYTkaXGhTl5zuYMsD5hriiRabvmCzaUex4ukNyrUk6gpuPRo.jpg?r=e98",
        rating: 98,
        synopsis: "Un grupo de amigos se ven envueltos en una serie de extraños eventos después de recibir una misteriosa señal en sus teléfonos celulares.",
        genres: ["Sci-Fi", "Mystery"],
        duration: "2h 5min",
        classification: "PG-13",
        resolution: "HD",
        isSeries: false
    },
]


const images1 = [
    {
        "name": "Gone Girl",
        "image": "https://occ-0-7215-3996.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbgFALSyo38BduDLF9gqviqjhvZbw6umrjJramotKH-XTUWdyo7i4XF4DqbPj2q6ipbQO9OekxVJgkzR7-k9Uytw2b0FBLZ4Iuc.webp?r=d37",
        "rating": 88,
        "synopsis": "Un hombre se convierte en el principal sospechoso en la desaparición de su esposa, revelando secretos oscuros en el proceso.",
        "genres": ["Drama", "Misterio", "Thriller"],
        "duration": "2h 29min",
        "classification": "R",
        "resolution": "HD",
        "isSeries": false
    },
    {
        "name": "Prisioneros",
        "image": "https://occ-0-7215-3996.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZIqWMDbKIF-k-KAou0K9ngPhPvxYbz-lpEYpjvg_OjzmSJmrzr3g0VKkP7NYziRvkDgdKBww02dJmiJz60A_cjJD4HnahpnrVCtdTfSVmdGQranN3Wp9F0hFMe7FgCNnuFt.jpg?r=d95",
        "rating": 87,
        "synopsis": "Un padre desesperado busca desesperadamente a su hija y su amiga después de su misteriosa desaparición.",
        "genres": ["Crimen", "Drama", "Misterio"],
        "duration": "2h 33min",
        "classification": "R",
        "resolution": "HD",
        "isSeries": false
    },
    {
        "name": "The LEGO Movie",
        "image": "https://store-images.s-microsoft.com/image/apps.46291.63440628812987356.6b6f8423-9de7-484e-9f65-f1652c0c4abe.9f7a5686-2bf9-4047-9afa-540bf93ea547?q=90&w=480&h=270",
        "rating": 87,
        "synopsis": "Un héroe común es reclutado para luchar contra un malvado tirano que quiere pegar el universo con pegamento.",
        "genres": ["Animation", "Action", "Adventure"],
        "duration": "1h 41min",
        "classification": "PG",
        "resolution": "HD",
        "isSeries": false
    },
    {
        "name": "The Grand Budapest Hotel",
        "image": "https://hips.hearstapps.com/hmg-prod/images/gran-hotel-budapest-cartel-1513779850.jpg",
        "rating": 87,
        "synopsis": "Un conserje de un famoso hotel y su joven protegido se involucran en una trama de robo y asesinato.",
        "genres": ["Adventure", "Comedy", "Crime"],
        "duration": "1h 39min",
        "classification": "R",
        "resolution": "HD",
        "isSeries": false
    },
    {
        "name": "Shaun of the Dead",
        "image": "https://i.ytimg.com/vi/7r743uLdrBc/maxresdefault.jpg",
        "rating": 85,
        "synopsis": "Un hombre intenta salvar a su novia y a su madre de una horda de zombies que invaden su ciudad.",
        "genres": ["Comedy", "Horror"],
        "duration": "1h 39min",
        "classification": "R",
        "resolution": "HD",
        "isSeries": false
    },
    {
        "name": "Hot Fuzz",
        "image": "https://i.ytimg.com/vi/OScrs7H0Cq8/maxresdefault.jpg",
        "rating": 88,
        "synopsis": "Dos policías de Londres investigan una serie de asesinatos en un tranquilo pueblo inglés.",
        "genres": ["Action", "Comedy", "Mystery"],
        "duration": "2h 1min",
        "classification": "R",
        "resolution": "HD",
        "isSeries": false
    },
    {
        "name": "Superbad",
        "image": "https://occ-0-7215-3996.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcSlr19nSR7JNXqG4qnyJtwJpRHTg0l269xOlvNtZlKJ4JU2gsFpp8D-w_ErkcQLaP8pMnHey1kZNcD3d20xEzKu-sbUUeQIJqo.webp?r=583",
        "rating": 84,
        "synopsis": "Dos adolescentes intentan comprar alcohol para una fiesta y enfrentan una serie de desventuras.",
        "genres": ["Comedy"],
        "duration": "1h 53min",
        "classification": "R",
        "resolution": "HD",
        "isSeries": false
    },
    {
        "name": "https://s29288.pcdn.co/wp-content/uploads/2019/05/anchorman-poster-750x404.jpg",
        "image": "https://example.com/anchorman.jpg",
        "rating": 82,
        "synopsis": "Un presentador de noticias arrogante lucha por mantener su estatus cuando una mujer es contratada como co-presentadora.",
        "genres": ["Comedy"],
        "duration": "1h 34min",
        "classification": "PG-13",
        "resolution": "HD",
        "isSeries": false
    }
]

export default function Netflix() {
    return (
        <main className="bg-[#181B1F] pt-16 sm:pt-0">
            <Header />
            <div className="pl-2 pb-4">
                <h1 className="text-white text-[18px] font-bold sm:pl-8">Peliculas de Hollywood dobladas al español</h1>
                <Carousel images={images1} />
            </div>
            <div className="pl-2 pb-4">
                <h1 className="text-white text-[18px] font-bold sm:pl-8">Lo nuevo en Netflix</h1>
                <Carousel images={images2} />
            </div>
            <div className="pl-2 pb-4">
                <h1 className="text-white text-[18px] font-bold sm:pl-8">Series de intriga y mistero</h1>
                <Carousel images={images3} />
            </div>
            <div className="pl-2 pb-4">
                <h1 className="text-white text-[18px] font-bold sm:pl-8">Porque viste Una esposa de mentira</h1>
                <Carousel images={images2} />
            </div>
            <div className="pl-2 pb-4">
                <h1 className="text-white text-[18px] font-bold sm:pl-8">Variedad</h1>
                <Carousel images={images3} />
            </div>
            <div className="pl-2 pb-4">
                <h1 className="text-white text-[18px] font-bold sm:pl-8">Peliculas sugeridas</h1>
                <Carousel images={images1} />
            </div>
            <div className="pl-2 pb-4">
                <h1 className="text-white text-[18px] font-bold sm:pl-8">Peliculas de comedia</h1>
                <Carousel images={images2} />
            </div>
        </main>
    )
}