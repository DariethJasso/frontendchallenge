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
export type DataGlobal = {
    summary: Category[];
    notification: Notification[];
    coffe: Coffe[];

}

const DataContext = React.createContext<DataGlobal>({
    summary : [],
    notification : [],
    coffe : []
});


const DataProvider = ({ children }:{children: React.ReactNode}) => {
    const [summary, setSummary] = React.useState<Category[]>([]);
    const [notification, setNotification] = React.useState<Notification[]>([]);
    const [coffe, setCoffe] = React.useState<Coffe[]>([]);


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



    useEffect(() => {
        fectchSummary();
        fetchNotifitication();
        fetchCoffe();
    },[]);
    return (
        <DataContext.Provider value={{ summary, notification, coffe }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;
export { DataProvider };