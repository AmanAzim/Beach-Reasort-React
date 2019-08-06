import React,{useContext} from 'react';
import {RoomsContext} from '../../contextStore/RoomsContextProvider'

import Title from '../reusableComps/Title'

const RoomsFilter = () => {

    const contextRooms=useContext(RoomsContext);

    const {type, availableTypes, capacity, availableCapacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets, rooms}=contextRooms;


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
                {/*Size input*/}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" className="size-input" value={minSize} onChange={contextRooms.handleChange} />
                        <input type="number" name="maxSize" id="size" className="size-input" value={maxSize} onChange={contextRooms.handleChange} />
                    </div>
                </div>
                {/*end of Size input*/}
                {/*extras*/}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={contextRooms.handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                     <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={contextRooms.handleChange} />
                        <label htmlFor="pets">pets</label>
                     </div>
                </div>
                {/*end of extras*/}
            </form>
        </section>
    );
};

export default RoomsFilter;
