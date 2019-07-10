import React, {useContext,Component} from 'react';
//import './App.css';
import {Route, Switch} from 'react-router-dom'

import Navbar from './components/views/Navbar'
import Home from './components/Home'
import Rooms from './components/Rooms'
import SingleRoom from './components/SingleRoom'
import ErrorPage from './components/ErrorPage'

import {RoomsContext} from "./contextStore/RoomsContextProvider";
import {ResortContext} from "./contextStore/ResortContextProvider";


class App extends Component{

    //const contextRooms=useContext(RoomsContext);
    //const contextResort=useContext(ResortContext);

    render(){
        return (
            <React.Fragment>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/single-room/:slug" exact component={SingleRoom}/>
                    <Route path="/rooms" exact component={Rooms}/>
                    <Route component={ErrorPage}/>
                </Switch>

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

            </React.Fragment>
        );
    }
}

export default App;
