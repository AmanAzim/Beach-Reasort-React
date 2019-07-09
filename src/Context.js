import React,{useEffect, useState} from 'react'

const ResortContext=React.createContext();

const ContextProvider=(props)=>{



    return (
        <ResortContext.Provider value={{}}>
            {props.children}
        </ResortContext.Provider>
    );
};

export {ContextProvider, ResortContext}

