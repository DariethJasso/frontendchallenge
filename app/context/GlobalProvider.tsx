'use client'
import axios from "axios";
import React, { useEffect } from "react";

export type Category = {
    category: string;
    score: number;
    icon: string;
}

export type Notification = {
    id: number;
    avatar: string;
    name: string;
    message: string;
    post?: string;
    group?: string;
    time: string;
}

export type Coffe = {
    id: number;
    image: string;
    name: string;
    popular: boolean;
    price: number;
    rating: number;
    votes: number;
    available?: boolean;
}
export type Tweet = {
    id: number;
    avatar: string;
    name: string;
    username: string;
    timestamp: string;
    text: string;
    image?: string;
    comments?: number;
    likes?: number;
    retweets?: number;
    statistics?: string;
    verified?: boolean;

}

export type Trend = {
    country: string;
    tendencia: string;
    posts: number;
}

export type TweetCategory = {
    id: number;
    avatar: string;
    name: string;
    username: string;
    timestamp: string;
    text: string;
    image?: string;
    comments?: number;
    likes?: number;
    retweets?: number;
    statistics?: string;
    verified?: boolean;
    categoria: string;

}
export type DataGlobal = {
    summary: Category[];
    notification: Notification[];
    coffe: Coffe[];
    tweets: Tweet[];
    trends: Trend[];
    tweetsCategory: TweetCategory[];


}


const DataContext = React.createContext<DataGlobal>({
    summary : [],
    notification : [],
    coffe : [],
    tweets : [],
    trends : [],
    tweetsCategory : [],
});


const DataProvider = ({ children }:{children: React.ReactNode}) => {
    const [summary, setSummary] = React.useState<Category[]>([]);
    const [notification, setNotification] = React.useState<Notification[]>([]);
    const [coffe, setCoffe] = React.useState<Coffe[]>([]);
    const [tweets, setTweets] = React.useState<Tweet[]>([]);
    const [trends, setTrends] = React.useState<Trend[]>([]);
    const [tweetsCategory, setTweetsCategory] = React.useState<TweetCategory[]>([]);

    const fectchSummary = async () => {
        try {
            const response = await axios.get('http://localhost:3030/categories');
            console.log(response.data);
            const summarys = await response.data;
            setSummary(summarys);
            
        } catch (error) {
            console.error('Error fetching summary:', error);
        }
    };

    const fetchNotifitication = async () => {
        try {
            const response = await axios.get('http://localhost:3030/notification');
            console.log(response.data);
            const notifications = await response.data;
            setNotification(notifications);
        }catch(error){
            console.error('Error fetching notification:', error);
        }
    }

    const fetchCoffe = async () => {
        try {
            const response = await axios.get('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');
            console.log(response.data);
            const coffes = await response.data;
            setCoffe(coffes);

        } catch (error) {
            console.error('Error fetching coffe:', error);
        }
    }

    const fetchTweets = async () => {
        try {
            // await new Promise((resolve) => setTimeout(resolve, 3000));
            const response = await axios.get('http://localhost:3030/tweets');
            console.log(response.data);
            const tweets = await response.data;
            setTweets(tweets);
        } catch (error) {
            console.error('Error fetching tweets:', error);
        }
    }
    
    const fetchTrends = async () => {
        try {
            const response = await axios.get('http://localhost:3030/tendencias');
            console.log(response.data);
            const trends = await response.data;
            setTrends(trends);
        } catch (error) {
            console.error('Error fetching trends:', error);
        }
    }

    const fetchTweetsCategory = async () => {
        try {
            const response = await axios.get('http://localhost:3030/postcategory');
            console.log(response.data);
            const tweetsCategory = await response.data;
            setTweetsCategory(tweetsCategory);
        } catch (error) {
            console.error('Error fetching tweetsCategory:', error);
        }
    }


    useEffect(() => {
        fectchSummary();
        fetchNotifitication();
        fetchCoffe();
        fetchTweets();
        fetchTrends();
        fetchTweetsCategory();
        
    },[]);
    return (
        <DataContext.Provider value={{ summary, notification, coffe, tweets, trends, tweetsCategory }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;
export { DataProvider };