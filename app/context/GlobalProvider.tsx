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
export type DataGlobal = {
    summary: Category[];
    notification: Notification[]
}

const DataContext = React.createContext<DataGlobal>({
    summary : [],
    notification : []
});


const DataProvider = ({ children }:{children: React.ReactNode}) => {
    const [summary, setSummary] = React.useState<Category[]>([]);
    const [notification, setNotification] = React.useState<Notification[]>([]);


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



    useEffect(() => {
        fectchSummary();
        fetchNotifitication();
    },[]);
    return (
        <DataContext.Provider value={{ summary, notification }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;
export { DataProvider };