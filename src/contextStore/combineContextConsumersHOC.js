import React from 'react';
import {RoomsContext} from './RoomsContextProvider'
import {ResortContext} from './ResortContextProvider'


//Mainly used for Class based components to consume from multiple Contexts but can be used for functional components too
const CombineContextConsumersHOC = (Component) => {
    return (props)=>{
        return (
            <ResortContext.Consumer>
                {contextResort=>(
                    <RoomsContext.Consumer>
                        {contextRooms=>(
                            <Component {...props} contextRooms={contextRooms} contextResort={contextResort}/>
                        )}
                    </RoomsContext.Consumer>
                )}
            </ResortContext.Consumer>
        );
    }
};

export default CombineContextConsumersHOC;
