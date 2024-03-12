import { faPlay,faCircleInfo } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Header() {
    return (
        <div className="h-[580px] xl:h-[800px] hidden sm:flex ">
            <div className="absolute top-52 xl:top-64 left-20 w-[400px]">
                <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUWkdYEkwGzjVW06Qci2JYgPJ5vs1M-xhT6f9nYQory5ObsJo4Nk5DvzQoebZToSPhH-k_DEeLs-Xsn7zWc8v4AqY7Eu-PaBZTqdXqav2oO9eMiU4In8AVzhIbT6LCu5a_v6t5lQOYV7DxbyESfjuRSPdMBZ0BbCIwRTZlxqaPV94m0FDqqNKA.png?r=eb9" alt="" />
                <p className="text-white text-[18px]">El agente altamente entrenado Tyler Rake regresa del umbral de la muerte con otra peligrosa misión: rescatar a la familia de un mafioso despiadado.</p>
                <div className="flex gap-4 py-28">
                    <button className="bg-white text-black rounded-md px-4 py-2"><FontAwesomeIcon icon={faPlay} className="pr-3" />Reproducir</button>
                    <button className="bg-opacity-90 bg-gray-500 text-white rounded-md px-4 py-2"> <FontAwesomeIcon icon={faCircleInfo} className="pr-3" />Mas información</button>
                </div>
            </div>
           <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUxmnvAwdgEzSF3KmCdbllosv0y-Y-Z1VIxi9lL4_SRaGNEQGgb9OYBfjjK0BXz9b1Vsr2YdwMaiw0LLF6s3NRzw8F0Raq6FfeffqGXQcGARnwIhMN9rG6RTa9pRnb-7zE4oCA.jpg?r=fe5" alt="" className="w-full h-[700px] xl:h-[1000px] " />
        </div>
    )
}