'use client'
import axios from "axios";
import React, { useEffect } from "react";

export type Category = {
    category: string;
    score: number;
    icon: string;
}
export type DataGlobal = {
    summary: Category[];
}

const DataContext = React.createContext<DataGlobal>({
    summary : [],
});


const DataProvider = ({ children }:{children: React.ReactNode}) => {
    const [summary, setSummary] = React.useState<Category[]>([]);


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

    useEffect(() => {
        fectchSummary();
    },[]);
    return (
        <DataContext.Provider value={{ summary }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;
export { DataProvider };