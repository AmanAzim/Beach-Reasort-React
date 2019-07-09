import React,{useEffect, useState} from 'react'
import items from '../data'

const RoomsContext=React.createContext();

const RoomsContextProvider=(props)=>{

    const [rooms, setRooms]=useState([]);
    const [sortedRooms, setSortedRooms]=useState([]);
    const [featuredRooms, setFeaturedRooms]=useState([]);
    const [loading, setLoading]=useState(true);

    const myState={rooms, sortedRooms, featuredRooms, loading};

    useEffect(()=>{
        
    },[]);

    return (
        <RoomsContext.Provider value={{...myState}}>
            {props.children}
        </RoomsContext.Provider>
    );
};

export {RoomsContextProvider, RoomsContext}

