import { createContext, useContext } from "react";

export const manageItem = createContext();

export function ItemContext({children}){
    return <manageItem.Provider>{children}</manageItem.Provider>
}

export const useItems = () => useContext(manageItem);