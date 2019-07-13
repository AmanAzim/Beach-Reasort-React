import React, {useContext} from 'react';
import {Route, Switch} from 'react-router-dom'

import Navbar from './components/views/Navbar'
import Home from './components/Home'
import Rooms from './components/Rooms'
import SingleRoom from './components/SingleRoom'
import ErrorPage from './components/ErrorPage'


const App =(props)=>{

    return (
        <React.Fragment>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/single-room/:slug" exact component={SingleRoom}/>
                <Route path="/rooms" exact component={Rooms}/>
                <Route component={ErrorPage}/>
            </Switch>
        </React.Fragment>
    );
}

export default App;
