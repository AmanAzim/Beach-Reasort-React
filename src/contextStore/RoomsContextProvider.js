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
    const [availableCapacity, setAvailableCapacity]=useState([]);
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
        availableCapacity,
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

        getRoomsInfo(myRooms);
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


    const getRoomsInfo=(myRooms)=>{
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
        //Get rooms unique types
        tempTypes=[...tempTypes,...new Set(myRooms.map(room=>room.type))];
        setAvailableTypes(tempTypes);

        //Get rooms unique capacities
        const tempCapacity=[...new Set(myRooms.map(room=>room.capacity))];
        setAvailableCapacity(tempCapacity);

        //Get the maximum and minumum price of the rooms
        let maxPrice=Math.max(...myRooms.map(room=>room.price));//will return all the prices of the rooms and Math.max() will return the max price.
        setMaxPrice(maxPrice);
        setPrice(maxPrice);
        let minPrice=Math.min(...myRooms.map(room=>room.price));
        setMinPrice(minPrice);

        //Get maximum size of the rooms
        let maxSize=Math.max(...myRooms.map(room=>room.size));
        setMaxSize(maxSize);
    };

    const getRoomBySlug=(slug)=>{
        return rooms.find(room=>room.slug===slug);
    };

    const handleChange=(event)=>{
        const type=event.target.type;
        const name=event.target.name;
        const value=type==='checkbox'? event.target.checked:event.target.value;//Because checkbox dont use value attribute it uses "checked"

        if(name==='type'){
            setType(value);
        }
        if(name==='capacity'){
            setCapacity(value);
        }
        if(name==='price'){
            setPrice(value);
        }
        if(name==='minSize'){
            setMinSize(value);
        }
        if(name==='maxSize'){
            setMaxSize(value);
        }
        if(name==='breakfast'){
            let tempValue=!breakfast;//To toggle tik of checkbox
            setBreakfast(tempValue);
        }
         if(name==='pets'){
            let tempValue=!pets;
            setPets(tempValue);
        }
        console.log(event.type);
        console.log('Event type='+type,'name='+name,'value='+value);
    };
    //Necessary because we want to filter the Rooms after each time certain parameters like type or capacity changes because they will be updated asynchronously.
    useEffect(()=>{
        filterRooms();
    },[type, price, capacity, minSize, maxSize, breakfast, pets]);

    const filterRooms=()=>{
        let tempRooms=[...rooms];
        if(type!=='all'){
            tempRooms=tempRooms.filter(room=>room.type==type);
        }
        if(capacity!=1){
            tempRooms=tempRooms.filter(room=>room.capacity>=capacity);
        }
        tempRooms=tempRooms.filter(room=>room.price<=price);

        tempRooms=tempRooms.filter(room=>room.size>=minSize && room.size<=maxSize);

        if(breakfast){
            tempRooms=tempRooms.filter(room=>room.breakfast===true);
        }

        if(pets){
            tempRooms=tempRooms.filter(room=>room.pets===true);
        }

        setSortedRooms(tempRooms);
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

