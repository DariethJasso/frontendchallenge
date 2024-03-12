'use client'
import { useData } from "../../hook/useData";
import Post from "./post";

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