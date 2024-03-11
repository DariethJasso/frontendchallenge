'use client'
import { useData } from "@/app/hook/useData";
import Image from "next/image"
import { useState } from "react";

export default function Content (){
    const {notification} = useData();
    return (
        <div className="flex flex-col gap-2">
            
                {
                    notification.map(item => {
                        return (
                            <div key={item.id} className={`${item.notified ? 'bg-[#FF5555]/10' : ''} p-3 flex content-center gap-3`}>
                                
                                <img src={item.avatar} alt="" className="rounded-full w-10 h-10" />
                               <div className="flex flex-col">
                                <div className="flex flex-wrap gap-1">
                                        <p className="font-bold">{item.name}</p>
                                        <p className="text-1xl font-normal ">{item.message}</p>
                                        {
                                            item.group ? <p className="text-blue-500 font-bold">{item.group}</p> : item.post ? <p className="text-[#5f5f5f] border p-1">{item.post}</p> : <img src={item.image} alt=""/>
                                        }
                                        {item.notified ? <div className="bg-[#FF5555] w-2 h-2 rounded-full m-1 my-2"/>: ""}
                                    </div>
                                    <p className="text-gray-400">{item.time}</p>
                               </div>
                                
                            </div>
                        )
                    })
                }                   
            
        </div>
    )
}