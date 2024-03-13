'use client'
import { Suspense } from "react";
import { useData } from "../../hook/useData";
import Post from "./post";
import Loading from "./loading";

export default function Tweets() {
    const {tweets} = useData();
    return (
        <>
            {
                tweets.map((tweet)=>{
                    return <Post key={tweet.id} tweet={tweet} />
                })
            }
            
        </>
    )
}