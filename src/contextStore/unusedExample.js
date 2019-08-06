import React, {useContext,Component} from 'react';

import {RoomsContext} from "./RoomsContextProvider";
import {ResortContext} from "./ResortContextProvider";
import CombinedContextConsumerHOC from './combineContextConsumersHOC'


class unusedExample extends Component{

    constructor(props){
        super(props);
        const contextRooms=useContext(RoomsContext);

        this.state={
            someValue:contextRooms.rooms
        }
    }

    componentDidMount() {
       const contextRooms=useContext(RoomsContext);
    }
    //const contextResort=useContext(ResortContext);


    render(){
        const {loading}=this.props.contextRooms;
        const {services}=this.props.contextResort;
        console.log('roomsContext',this.props.contextRooms)

        return (
            <React.Fragment>
                <h2>Hello</h2>
                {/*Consuming data from both Contextes*/}
                <ResortContext>
                    {resortContext=>(
                        <RoomsContext>
                            {roomContext=>(
                                <h1>{resortContext.name}{roomContext.name}</h1>
                            )}
                        </RoomsContext>
                    )}
                </ResortContext>

                {/*Consuming data from both Contextes using HOC*/}
                <p>Loading is: {loading? 'true':'false'}</p>
                <p>Number of services:{services.length}</p>
            </React.Fragment>
        );
    }
}

export default CombinedContextConsumerHOC(unusedExample);
