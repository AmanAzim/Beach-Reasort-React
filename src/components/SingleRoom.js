import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {RoomsContext} from '../contextStore/RoomsContextProvider'

import HeadBackground from './reusableComps/HeadBackground'
import Banner from './reusableComps/Banner'



class SingleRoom extends Component {

    static contextType=RoomsContext;

    state={
        slug:this.props.match.params.slug,
    };


    render() {

        const room=this.context.getRoomBySlug(this.state.slug);

        let showRender=null;

        if(!room){
            showRender=(
                <HeadBackground>
                    <Banner title="sorry" subtitle="no such room could be found">
                        <Link to="/rooms" className="btn-primary">Back to rooms</Link>
                    </Banner>
                </HeadBackground>
            );
        }else {

            const {name, description, capacity, size, price, extras, breakfast, pets, images}=room;

            showRender=(
                <HeadBackground cssClass="roomsHero">
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">Back to rooms</Link>
                    </Banner>
                </HeadBackground>
            );
        }

        return (
            showRender
        );
    }
}

export default SingleRoom;
