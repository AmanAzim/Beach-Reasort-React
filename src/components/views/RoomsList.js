import React,{useContext} from 'react';
import {RoomsContext} from '../../contextStore/RoomsContextProvider'

import Spinner from '../reusableComps/Spinner'

const RoomsList = () => {

    const contextRooms=useContext(RoomsContext);
    const {loading, sortedRooms}=contextRooms;

    if(loading){
        return <Spinner/>
    }

    return (
        <div>
            hello from rooms list
        </div>
    );
};

export default RoomsList;
