import React,{useEffect, useState} from 'react'
import items from '../data'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'


const ResortContext=React.createContext();

const ResortContextProvider = (props) => {

    const [services, setServices]=useState([
        {   icon:<FaCocktail/>,
            title:"Free Cocktails",
            info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, possimus.'
        },
        {   icon:<FaHiking/>,
            title:"Endless Hikings",
            info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, possimus.'
        },
        {   icon:<FaShuttleVan/>,
            title:"Free Shuttle",
            info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, possimus.'
        },
        {   icon:<FaBeer/>,
            title:"Strongest Beer",
            info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, possimus.'
        } ]);

    const myState={services};

    return (
        <ResortContext.Provider value={{...myState}}>
            {props.children}
        </ResortContext.Provider>
    );
};

export {ResortContextProvider, ResortContext};
