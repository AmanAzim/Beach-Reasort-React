import React,{useContext} from 'react';
import {RoomsContext} from '../../contextStore/RoomsContextProvider'

import Title from '../reusableComps/Title'

const RoomsFilter = () => {

    const contextRooms=useContext(RoomsContext);
    const {type, availableTypes,
           capacity, availableCapacity,
           price, minPrice, maxPrice, minSize, maxSize, breakfast, pets, rooms}=contextRooms;
   // console.log('price='+maxPrice)

    return (
        <section className="filter-container">
            <Title title="filter rooms"/>
            <form className="filter-form">
                {/*select type*/}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={contextRooms.handleChange}>
                        {availableTypes.map(availtype=><option value={availtype} key={availtype}>{availtype}</option>)}
                    </select>
                </div>
                {/*end of select type*/}
                {/*select guest*/}
                <div className="form-group">
                    <label htmlFor="capacity">guest</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={contextRooms.handleChange}>
                        {availableCapacity.map(availCap=><option value={availCap} key={availCap}>{availCap}</option>)}
                    </select>
                </div>
                {/*end of select guest*/}
                {/*room price range*/}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range" name="price" id="price" className="form-control" min={minPrice} max={maxPrice} value={price} onChange={contextRooms.handleChange}/>
                </div>
                {/*end of room price range*/}
            </form>
        </section>
    );
};

export default RoomsFilter;
