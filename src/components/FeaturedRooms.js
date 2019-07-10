import React,{useContext} from 'react';
import {RoomsContext} from '../contextStore/RoomsContextProvider'

import

const FeaturedRooms = () => {

    const contextRooms=useContext(RoomsContext);
    const {featuredRooms}=contextRooms;

    return (
        <div>

        </div>
    );
};

export default FeaturedRooms;
