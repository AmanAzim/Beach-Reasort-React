import React,{useEffect, useState} from 'react'

const ResortContext=React.createContext();

const ResortContextProvider = (props) => {

    return (
        <ResortContext.Provider value={{name:"Hello from Resort Context"}}>
            {props.children}
        </ResortContext.Provider>
    );
};

export {ResortContextProvider, ResortContext};
