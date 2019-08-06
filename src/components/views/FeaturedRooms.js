import React,{useContext} from 'react';
import {RoomsContext} from '../../contextStore/RoomsContextProvider'

import Title from '../reusableComps/Title'
import ViewRoom from './ViewRoom'
import Spinner from '../reusableComps/Spinner'

const FeaturedRooms = () => {

    const contextRooms=useContext(RoomsContext);
    const {featuredRooms, loading}=contextRooms;

    const rooms=featuredRooms.map(room=>{
        return <ViewRoom room={room} key={room.id} />
    });

    return (
        <section className="featured-rooms">
            <Title title="featured rooms"/>
            <div className="featured-rooms-center">
                {loading? <Spinner/>:rooms}
            </div>
        </section>
    );
};

export default FeaturedRooms;
