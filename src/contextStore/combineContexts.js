import React,{} from 'react';

import {RoomsContextProvider} from './RoomsContextProvider'
import {ResortContextProvider} from './ResortContextProvider'

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
