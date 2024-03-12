'use client'
import { useState } from "react"
import { faChevronLeft, faChevronRight, faPlay,faPlus, faThumbsUp,faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";
import Video from "./Video";

interface CarouselProps {
    images: {
        name: string;
        image: string;
        rating: number;
        synopsis: string;
        genres: string[];
        duration: string;
        classification: string;
        resolution: string;
        isSeries: boolean;
        seasons?: number;
    }[];
}

export default function Carousel ({images}: CarouselProps) {

    const [scrollX, setScrollX] = useState(0);
    const [like, setLike] = useState(false);

    const handlePrevSlide = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        setScrollX(x > 0 ? 0 : x);
    }

    const handleNextSlide = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listWidth = images.length * 280; // Width of each item in pixels (assuming 280px width per image)
        let limit = window.innerWidth - listWidth;
        setScrollX(x < limit ? limit : x);
    }

    return (
        <div className="relative">
            <button
                className="absolute inset-y-0 left-0 z-10 bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75 px-3 py-2 rounded"
                onClick={handlePrevSlide}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
                className="absolute inset-y-0 right-0 z-10 bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75 px-3 py-2 rounded"
                onClick={handleNextSlide}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <div className="overflow-hidden">
                <div
                    className="flex gap-1 sm:gap-3 sm:pl-8"
                    style={{ transform: `translateX(${scrollX}px)`, transition: "transform ease-out 0.45s" }}
                >
                    {images.map((image, index) => (
                        <Tooltip key={index}
                        delay={900}
                            content={
                                <div className="px-1 py-2">
                                    <img src={image.image} alt="hola" className="w-[180px] sm:w-[200px] xl:w-[280px] object-cover rounded-lg cursor-auto" />
                                    <div className="flex justify-between py-3">
                                        <div className="flex gap-2 ">
                                            <button className="bg-white  border border-gray_700 rounded-full h-[40px] w-[40px]"><FontAwesomeIcon className="text-black" icon={faPlay} /></button>
                                            <button className="border border-gray-700 rounded-full h-[40px] w-[40px]"><FontAwesomeIcon className="text-white" icon={faPlus} /></button>
                                            <button onClick={() => setLike(!like)} className={`border border-gray-700 rounded-full h-[40px] w-[40px] ${like ? " bg-white" : "text-white"}`}><FontAwesomeIcon className={like ? "text-black" : "text-white"} icon={faThumbsUp} /></button>
                                        </div>
                                        <button className="border border-gray-700 rounded-full h-[40px] w-[40px]"><FontAwesomeIcon className="text-white" icon={faChevronDown} /></button>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <p className="font-bold text-green-500">{image.rating}% para ti</p>
                                        <p className="text-gray-300 border p-1 min-w-[30px] h-7 text-center">{image.classification}</p>
                                        {image.isSeries ? <p className="text-gray-300 ">{image.seasons} seasons</p> : <p className="text-gray-300">{image.duration}</p>}
                                        <p className="text-gray-300 border p1 min-w-[30px] h-auto text-center">{image.resolution}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        {image.genres.map((genre, index) => (
                                            <p className="text-gray-300" key={index}>{genre} •</p>
                                        ))}
                                    </div>
                                </div>
                            }
                            offset={-60}
                            className="bg-[#181B1F] cursor-pointer"
                        >
                            <img
                                src={image.image}
                                alt={"image"}
                                className="w-[180px] sm:w-[200px] xl:w-[280px] object-cover rounded-lg"
                            />
                        </Tooltip>
                    ))}
                </div>
            </div>
        </div>
    )
}
