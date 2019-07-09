import React from 'react'
import {Link} from 'react-router-dom'

import HeadBackground from './reusableHbackgroundBanner/HeadBackground'
import Banner from './reusableHbackgroundBanner/Banner'
import Sevices from './reusableServiceTitle/Services'

const Home=()=>{
    return (
        <>
            <HeadBackground cssClass="defaultHero">
                <Banner title="Luxurious Rooms" subtitle="Delux rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">our rooms</Link>
                </Banner>
            </HeadBackground>
            <Sevices/>
        </>
    )
}

export default Home;
