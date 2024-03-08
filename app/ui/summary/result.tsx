'use client'
import { useData } from "@/app/hook/useData";

export default function Result() {

    const {summary}=useData();

    const total = summary.reduce((a,b) => a + b.score, 0);
    const result = total / summary.length;

    return (
        <article className="bg-gradient-to-b from-[#4144fe] to-[#4A00E0] h-[320px] rounded-b-[40px] sm:rounded-[30px]  md:h-[380px]">
            <h1 className="text-white text-1xl font-bold text-center py-4">Your Result</h1>
            <div className=" flex flex-col items-center">
                <div className="text-white rounded-[50%] bg-gradient-to-t from-[#3134cf] to-[#340396] w-[140px] h-[140px] flex flex-col justify-center items-center ">
                    <span className="text-6xl font-bold">{result}</span>
                    <span className="text-1xl font-bold pt-3 text-gray-400">of 100</span>
                </div>
                <h1 className="font-bold text-white text-2xl py-3">Great</h1>
                <p className="text-white tracking-tight w-[250px] md:px-4 md:text-center md:text-gray-400">You scored higher than 65% of the people who have taken these tests.</p>
            </div>
        </article>
    )
}