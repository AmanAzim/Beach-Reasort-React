import React from 'react';
import {Link} from 'react-router-dom'

import HeadBackground from './HeadBackground'
import Banner from './Banner'

const Rooms = () => {
    return (
        <HeadBackground cssClass="roomsHero">
            <Banner title="our rooms">
                <Link to="/" className="btn-primary">return to home</Link>
            </Banner>
        </HeadBackground>
    );
};

export default Rooms;
