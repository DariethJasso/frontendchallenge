'use client'
import React, { useState } from "react";
import { useData } from "../../hook/useData";
import Post from "./post";
import Loading from "./loading";

export default function Tweets() {
    const { tweets, loading, users } = useData();
    const [visibleTweets, setVisibleTweets] = useState(6);
    
    const showMoreTweets = () => {
        setVisibleTweets(prevVisibleTweets => prevVisibleTweets + 6);
    };

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                tweets.slice(0, visibleTweets).map((item) => {
                    // Buscar el usuario correspondiente al tweet
                    return (

                        <Post key={item.id} tweet={item} user={users.find(user => user.id === item.userId) || { id: 0, name: "", username: "", email: "", avatar: "", verified: false, followers: "", following: "", tweets: "", location: "", joined: "" }} />
                    )





                })
            )}

            {tweets.length > visibleTweets && (
                <div className="flex justify-center">
                    <button onClick={showMoreTweets} className="text-blue-500 w-[200px] h-[30px] border-1 border-blue-500 rounded-xl bg-blue-400/40 mb-[50px]">Mostrar más</button>
                </div>
            )}
        </>
    );
}
