import FourYou from "@/app/ui/twitter/4you";
import NewPost from "@/app/ui/twitter/NewPost";
import Prime from "@/app/ui/twitter/Prime";
import Search from "@/app/ui/twitter/Search";
import Top from "@/app/ui/twitter/Top";
import Tweets from "@/app/ui/twitter/Tweets";

export default function Siguiendo() {
    return (
        <main className="bg-black sm:h-auto sm:flex sm:pl-[120px] lg:pl-[300px] lg:w-[74%] xl1:pl-[460px] xl1:w-screen">
            <section className="border-r-1 border-gray-300/25 xl:w-[700px]">
                <FourYou />
                <div className="pl-2 pb-4 sm:h-[50px]">

                </div>
                <NewPost />
                <p className="text-white font-bold">Siguiendo:</p>
                <Tweets />
            </section>
            
        </main>
    )
}