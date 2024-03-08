import { useData } from "@/app/hook/useData";

export default function Category(){
    const {summary}=useData()
    return (
        <div className="flex flex-col gap-2">
                {
                   summary.map(item =>{
                    return (
                        <div key={item.category} className={`flex  text-[16px] font-bold h-[50px] items-center justify-between p-2 rounded-lg ${item.category === 'Reaction' ? 'bg-[#FF5555]/10' : item.category === 'Memory' ? 'bg-[#FFB21E]/10' : item.category === 'Verbal' ? 'bg-[#00BB8F]/10' : 'bg-[#1125D6]/10'} md:h-[50px]`}>
                            <div className="flex gap-2">
                                <img src={item.icon} alt={item.category} />
                                <p className={`${item.category === 'Reaction' ? 'text-[#FF5555]' : item.category === 'Memory' ? 'text-[#FFB21E]' : item.category === 'Verbal' ? 'text-[#00BB8F]' : 'text-[#1125D6]'}`}>{item.category}</p>

                            </div>
                            <div className="flex gap-2">
                                <p>{item.score} <span className="text-gray-400">/ 100</span></p>

                            </div>
                        </div>
                    )
                   })
                }
            </div>
    )
}