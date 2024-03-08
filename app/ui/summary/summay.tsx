'use client'
import { useData } from "@/app/hook/useData"
import Category from "./category";

export default function SummaryData(){

    
    return (
        <article className="p-7 md:shadow-md md:h-[380px] md:w-[300px] rounded-r-xl">
            <h1 className="text-[20px] font-bold pb-4">Summary</h1>
            <Category/>
            <button className="bg-[#303B59] text-white w-full mt-4 h-[60px] rounded-full font-bold text-[16px] tracking-wider md:h-[40px] hover:bg-gradient-to-b from-[#4144fe] to-[#4A00E0]">
                Continue
            </button>
        </article>
    )
}