'use client'
import { useData } from "@/app/hook/useData";
import Image from "next/image";
import starfill from '/public/coffe/star_fill.svg';
import star from '/public/coffe/star.svg';

export default function ListCoffe(){

    const { coffe } = useData();
    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap items-center justify-center">
            {
                coffe.map(item => (
                    <div key={item.id}>
                        {
                            item.popular ? <div className="bg-[#F6C768] font-semibold w-auto text-[13px] p-1 text-center rounded-md absolute ml-3 mt-3">Popular</div> : ""
                        }
                        <img src={item.image} alt="" className="rounded-lg " />
                        
                        <div className="flex justify-between pt-3">
                            <p className="text-gray-400 font-bold">{item.name}</p>
                            <p className="bg-[#BEE3CC] font-bold w-[50px] text-center rounded-md">{item.price}</p>
                        </div>
                        <div className="flex justify-start items-center gap-2 py-1">
                        {
                            item.rating >= 1 ? <Image src={starfill} alt="" width={20} height={20} /> : <Image src={star} alt="" width={20} height={20} />
                        }
                        <p className="text-white">{item.rating}</p>
                        <p className="text-gray-400 text-[13px]">({item.votes} votes)</p>
                        {
                            !item.available ? <p className="text-red-500 pl-10">Sold out</p> : ''
                        }
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
}