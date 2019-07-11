import React from 'react';
import {Link} from 'react-router-dom'

import HeadBackground from './reusableComps/HeadBackground'
import Banner from './reusableComps/Banner'
import RoomsFilter from './views/RoomsFilter'
import RoomsList from './views/RoomsList'
import RoomsBackground from '../images/room-1.jpeg'

const Rooms = () => {
    return (
        <React.Fragment>
            <HeadBackground cssClass="roomsHero" img={RoomsBackground}>
                <Banner title="our rooms">
                    <Link to="/" className="btn-primary">return to home</Link>
                </Banner>
            </HeadBackground>
            <RoomsFilter />
            <RoomsList />
        </React.Fragment>
    );
};

export default Rooms;
