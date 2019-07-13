import React,{useEffect, useState} from 'react'
import items from '../data'
import cloneDeep from 'lodash/cloneDeep';

const RoomsContext=React.createContext();

const RoomsContextProvider=(props)=>{

    const [rooms, setRooms]=useState([]);
    const [sortedRooms, setSortedRooms]=useState([]);
    const [featuredRooms, setFeaturedRooms]=useState([]);
    const [loading, setLoading]=useState(true);
    const [type, setType]=useState('all');
    const [availableTypes, setAvailableTypes]=useState([]);
    const [capacity, setCapacity]=useState(1);
    const [price, setPrice]=useState(0);
    const [minPrice, setMinPrice]=useState(0);
    const [maxPrice, setMaxPrice]=useState(0);
    const [minSize, setMinSize]=useState(0);
    const [maxSize, setMaxSize]=useState(0);
    const [breakfast, setBreakfast]=useState(false);
    const [pets, setPets]=useState(false);

    const myState={
        rooms,
        sortedRooms,
        featuredRooms,
        loading,
        type,
        availableTypes,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    };

    useEffect(()=>{
        loadData();
    },[]);

    const loadData=()=>{
        let myRooms=formatData(items);
        setRooms(myRooms);
        setSortedRooms(myRooms);

        let myFeaturedRooms=myRooms.filter(room=>room.featured===true);
        setFeaturedRooms(myFeaturedRooms);

        let maxPrice=Math.max(...rooms.map(room=>room.price));//will return all the prices of the rooms and Math.max() will return the max price.
        setMaxPrice(maxPrice);
        setPrice(maxPrice);
        let maxSize=Math.max(...rooms.map(room=>room.size));
        setMaxSize(maxSize);

        getRoomsType(myRooms);
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


    const getRoomsType=(myRooms)=>{
        let tempTypes=["all"];
      /*let isUnique=false;
        myRooms.forEach((room, i)=>{
            if(tempTypes.length===0){
                tempTypes=[...tempTypes, room.type];
            }
            else {
                tempTypes.forEach(type=>{
                    if(type!==room.type){
                        isUnique=true;
                    }else{
                        isUnique=false;
                    }
                });
                if(isUnique){
                    tempTypes=[...tempTypes,room.type];
                }
            }
        });*/

        //MODERN WAY://new Set([iterable]);//a Set returns A new Set object.
        tempTypes=[...tempTypes,...new Set(myRooms.map(room=>room.type))];
        setAvailableTypes(tempTypes);
    };

    const getRoomBySlug=(slug)=>{
        return rooms.find(room=>room.slug===slug);
    };

    const handleChange=(event)=>{
        const type=event.target.type;
        const name=event.target.name;
        const value=event.target.value;
        setType(value);
        if(value==='all'){
            setSortedRooms(rooms);
        }else{
            setSortedRooms(rooms.filter(room=>room.type===value))
        }
        console.log('Event type='+type,'name='+name,'value='+value);
    };

    return (
        <RoomsContext.Provider value={{...myState,
            getRoomBySlug:getRoomBySlug,
            handleChange:handleChange}}>
            {props.children}
        </RoomsContext.Provider>
    );
};

export {RoomsContextProvider, RoomsContext}

