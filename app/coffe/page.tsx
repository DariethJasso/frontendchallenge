import bgCoffe from "/public/coffe/bg-cafe.jpg";
import vector from "/public/coffe/vector.svg";
import ListCoffe from "../ui/coffe/ListCoffe";
import Image from "next/image";
export default function Coffe(){
    return (
        <main className="bg-[#111315] h-[1800px] sm:h-screen md:h-[1200px] ">
            <Image src={bgCoffe} alt="" className="w-full absolute z-0 h-[180px] fill-current" />
            <div className="flex justify-center items-center min-h-full pt-32 ">
                <div className="bg-[#1B1D1F] w-[320px] sm:w-[640px] rounded-lg px-5 absolute top-[100px] ">
                    <Image src={vector} alt="" className=" absolute left-[128px] sm:left-[400px] -z-0" width={200} height={300} />
                    <h1 className="text-white text-2xl font-semibold text-center py-4 z-10">Our Collection</h1>
                    <p className="text-[#6F757C] text-center ">Introducing our Coffe Collection, a selection of unique coffes from different roast types and origins, expertly, roasted in small batches and shipped fresh weekly.</p>
                    <div className="flex justify-center items-center gap-3 py-3 ">
                        <button className="bg-[#6F757C] rounded-md h-[35px] py-1 px-2 text-white font-bold">All Products</button>
                        <button className="rounded-md h-[35px] py-1 px-2 text-white font-bold">Available Now</button>
                    </div>
                    <ListCoffe/>
                </div>
            </div>
        </main>
    )
}