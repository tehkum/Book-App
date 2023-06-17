import { createContext, useContext, useEffect, useState } from "react";
import { BookData } from "../Data/Data";

export const manageItem = createContext();

export function ItemContext({children}){
    const [ bookData, setBookData] = useState([]);


    useEffect(()=>{
        setBookData(BookData)
    },[])

    const stateChanger = (bookId, state) => {
        bookData.find(({id})=> id === bookId).state = state;
        setBookData([...bookData])
    }

    return <manageItem.Provider value={{bookData, stateChanger}}>{children}</manageItem.Provider>
}

export const useItems = () => useContext(manageItem);