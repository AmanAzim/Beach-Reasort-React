import React,{useEffect, useState} from 'react'
import items from '../data'
import cloneDeep from 'lodash/cloneDeep';

const RoomsContext=React.createContext();

const RoomsContextProvider=(props)=>{

    const [rooms, setRooms]=useState([]);
    const [sortedRooms, setSortedRooms]=useState([]);
    const [featuredRooms, setFeaturedRooms]=useState([]);
    const [loading, setLoading]=useState(true);

    const myState={rooms, sortedRooms, featuredRooms, loading};

    useEffect(()=>{
        loadData();
    },[]);

    const loadData=()=>{
        let myRooms=formatData(items);
        setRooms(myRooms);
        setSortedRooms(myRooms);

        let myFeaturedRooms=myRooms.filter(room=>room.featured===true);
        setFeaturedRooms(myFeaturedRooms);
        setLoading(false);
    };

    const formatData=(items)=>{
        let clonedItems=cloneDeep(items);

        let tempItems=clonedItems.map(item=>{
            const id=item.sys.id;
            const images=item.fields.images.map(img=>img.fields.file.url);
            const rooms={...item.fields, id, images};
            return rooms;
        });

        return tempItems;
    };

    const getRoomBySlug=(slug)=>{
        return rooms.find(room=>room.slug===slug);
    };

    return (
        <RoomsContext.Provider value={{...myState,
            getRoomBySlug:getRoomBySlug }}>
            {props.children}
        </RoomsContext.Provider>
    );
};

export {RoomsContextProvider, RoomsContext}

