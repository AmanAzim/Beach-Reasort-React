import React,{useContext} from 'react';
import {RoomsContext} from '../../contextStore/RoomsContextProvider'

import Spinner from '../reusableComps/Spinner'
import ViewRoom from '../views/ViewRoom'


const RoomsList = () => {

    const contextRooms=useContext(RoomsContext);
    const {loading, sortedRooms, rooms}=contextRooms;

    if(loading){
        return <Spinner/>
    }

    if(sortedRooms.length===0){
        return (
            <div className="empty-search">
                <h3>unfortunately no rooms matched your search parameters</h3>
            </div>
        );
    }

    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {sortedRooms.map(room=><ViewRoom room={room} key={room.id}/>)}
            </div>
        </section>
    );
};

export default RoomsList;
