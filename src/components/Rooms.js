import React from 'react';
import {Link} from 'react-router-dom'

import HeadBackground from './reusableHbackgroundBanner/HeadBackground'
import Banner from './reusableHbackgroundBanner/Banner'

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
