/* eslint-disable react-refresh/only-export-components */
import { createContext,useContext, useState } from "react";


//create context
export const NewsContext=createContext();

// create context provider 
function NewsContextProvider(props){
    const [category,setCategory]=useState("");    

    
    const contextValue={
        category,
        setCategory
    }

    return (
        <NewsContext.Provider value={contextValue}>
            {props.children}
        </NewsContext.Provider>
    )
}

//export provider and context
export default NewsContextProvider;
export const useNewsContext=()=>{
    return useContext(NewsContext);
}

