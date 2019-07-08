import React from 'react'
import {Link} from 'react-router-dom'

import HeadBackground from './HeadBackground'
import Banner from './Banner'

const Home=()=>{
    return (
        <HeadBackground cssClass="defaultHero">
            <Banner title="Luxurious Rooms" subtitle="Delux rooms starting at $299">
                <Link to="/rooms" className="btn-primary">our rooms</Link>
            </Banner>
        </HeadBackground>
    )
}

export default Home;
