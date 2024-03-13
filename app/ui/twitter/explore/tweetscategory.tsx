'use client'
import { useData } from "@/app/hook/useData";
import { faCommentDots, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post from "../post";

export default function TweetsCategory() {
    const {tweetsCategory} = useData();
    console.log(tweetsCategory)
    return (
        <div>
            <div className="flex justify-between items-center px-4 py-3">
                <div className="flex items-center gap-3">
                    <FontAwesomeIcon  className="text-blue-500" icon={faCommentDots} />
                    <p className="text-white font-bold">Comida</p>
                    
                </div>
                <FontAwesomeIcon className="text-gray-400" icon={faEllipsis} />
            </div>
            {
                    tweetsCategory.filter((item) => item.categoria === 'comida').map((item) => (
                        <Post key={item.id} tweet={item} />
                    ))
                }
            <div className="flex justify-between items-center px-4 py-3">
                <div className="flex items-center gap-3">
                    <FontAwesomeIcon  className="text-blue-500" icon={faCommentDots} />
                    <p className="text-white font-bold">Gaming</p>
                    
                </div>
                <FontAwesomeIcon className="text-gray-400" icon={faEllipsis} />
            </div>
            {
                    tweetsCategory.filter((item) => item.categoria === 'gaming').map((item) => (
                        <Post key={item.id} tweet={item} />
                    ))
                }
            <div className="flex justify-between items-center px-4 py-3">
                <div className="flex items-center gap-3">
                    <FontAwesomeIcon  className="text-blue-500" icon={faCommentDots} />
                    <p className="text-white font-bold">Tecnologia</p>
                    
                </div>
                <FontAwesomeIcon className="text-gray-400" icon={faEllipsis} />
            </div>
            {
                    tweetsCategory.filter((item) => item.categoria === 'tecnología').map((item) => (
                        <Post key={item.id} tweet={item} />
                    ))
                }
        </div>
    )
}