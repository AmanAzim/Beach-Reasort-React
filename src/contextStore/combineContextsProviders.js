import React,{} from 'react';

import {RoomsContextProvider} from './RoomsContextProvider'
import {ResortContextProvider} from './ResortContextProvider'


const CombineContextsProviders = (props) => {
    return (
        <ResortContextProvider>
            <RoomsContextProvider>
                {props.children}
            </RoomsContextProvider>
        </ResortContextProvider>
    );
};

export default CombineContextsProviders;
