import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Avatar({img, name}: {img: string, name: string}) {
    return (
        <div className="flex  gap-1 pl-2 items-center">
            
            <img src={img} alt={name} className="rounded-lg w-9 h-9"/>
            <FontAwesomeIcon icon={faChevronDown} className="text-white hidden sm:block text-1xl"/>
        </div>
    )
}