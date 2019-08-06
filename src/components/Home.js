import React from 'react'
import {Link} from 'react-router-dom'

import HeadBackground from './reusableComps/HeadBackground'
import Banner from './reusableComps/Banner'
import Sevices from './views/Services'
import FeaturedRooms from './views/FeaturedRooms'

const Home=()=>{
    return (
        <>
            <HeadBackground cssClass="defaultHero">
                <Banner title="Luxurious Rooms" subtitle="Delux rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">our rooms</Link>
                </Banner>
            </HeadBackground>
            <Sevices/>
            <FeaturedRooms />
        </>
    )
}

export default Home;
