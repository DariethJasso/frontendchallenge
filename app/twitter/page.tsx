
import { Suspense } from "react";
import { useData } from "../hook/useData";
import FourYou from "../ui/twitter/4you";
import NewPost from "../ui/twitter/NewPost";
import Post from "../ui/twitter/post";
import Prime from "../ui/twitter/Prime";
import Search from "../ui/twitter/Search";
import Top from "../ui/twitter/Top";
import Tweets from "../ui/twitter/Tweets";
import Users from "../ui/twitter/Users";
import Loading from "../ui/twitter/loading";

export default function Home(){
    
    return (
        <main className="bg-black sm:h-auto sm:flex sm:pl-[120px] lg:pl-[300px] lg:w-[74%] xl1:pl-[420px] xl1:w-screen">
            <section className="border-r-1 border-gray-300/25 xl:w-[700px]">
                <FourYou />
                <div className="pl-2 pb-4 sm:h-[50px]">

                </div>
                <NewPost />
                <Suspense fallback={<Loading />}>
                    <Tweets />
                </Suspense>
            </section>
            
            
        </main>
    )
}