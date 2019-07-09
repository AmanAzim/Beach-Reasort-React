import React,{} from 'react';

import {RoomsContextProvider} from './RoomsContext'
import {ResortContextProvider} from './ResortContext'

const CombineContexts = (props) => {
    return (
        <ResortContextProvider>
            <RoomsContextProvider>
                {props.children}
            </RoomsContextProvider>
        </ResortContextProvider>
    );
};

export default CombineContexts;
