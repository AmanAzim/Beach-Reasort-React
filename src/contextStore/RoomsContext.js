import React,{useEffect, useState} from 'react'

const RoomsContext=React.createContext();

const RoomsContextProvider=(props)=>{



    return (
        <RoomsContext.Provider value={{name:"Hello from RoomsContext"}}>
            {props.children}
        </RoomsContext.Provider>
    );
};

export {RoomsContextProvider, RoomsContext}

