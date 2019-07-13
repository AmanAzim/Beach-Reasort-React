import React,{useContext} from 'react';
import {RoomsContext} from '../../contextStore/RoomsContextProvider'

import Title from '../reusableComps/Title'

const RoomsFilter = () => {

    const contextRooms=useContext(RoomsContext);
    const {type, availableTypes, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets, rooms}=contextRooms;

    return (
        <section className="filter-container">
            <Title title="filter rooms"/>
            <form className="filter-form">
                {/*select type*/}
                <div className="form-group">
                    <lebel htmlFor="type">room type</lebel>
                    <select name="type" id="type" value={type} className="form-control" onChange={contextRooms.handleChange}>
                        {availableTypes.map(availtype=><option value={availtype} key={availtype}>{availtype}</option>)}
                    </select>
                </div>
                {/*end of select type*/}
            </form>
        </section>
    );
};

export default RoomsFilter;
