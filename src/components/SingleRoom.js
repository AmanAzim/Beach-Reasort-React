import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {RoomsContext} from '../contextStore/RoomsContextProvider'

import HeadBackground from './reusableComps/HeadBackground'
import Banner from './reusableComps/Banner'
import StyledHeadBackground from './reusableComps/StyledHeadBackground'
import defaultImg from '../images/room-1.jpeg'

class SingleRoom extends Component {

    static contextType=RoomsContext;

    state={
        slug:this.props.match.params.slug,
        defaultImg:defaultImg
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
            const [mainImg,...restImgs]=images; //"mainImg" has th first image and restImgs contains all other images

            showRender=(
                <React.Fragment>                             {/*images[0]*/}
                    <HeadBackground cssClass="roomsHero" img={mainImg||this.state.defaultImg}>
                        <Banner title={`${name} room`}>
                            <Link to="/rooms" className="btn-primary">Back to rooms</Link>
                        </Banner>
                    </HeadBackground>

                    <section className="single-room">
                        <div className="single-room-images">
                            {restImgs.map((img,index)=>{
                                return <img src={img} key={img} alt={name}/>
                            })}
                        </div>
                        <div className="single-room-info">
                            <article className="desc">
                                <h3>details</h3>
                                <p>{description}</p>
                            </article>
                            <article className="info">
                                <h3>Info</h3>
                                <h6>price : ${price}</h6>
                                <h6>size : ${size} SQFT</h6>
                                <h6>max capacit : {capacity>1? `${capacity} people`: `${capacity} person`}</h6>
                                <h6>{pets? 'pets allowed':'pets not allowed'}</h6>
                                <h6>{breakfast && 'free breakfast included'}</h6>
                            </article>
                        </div>
                    </section>
                    <section className="room-extras">
                        <h6>extras</h6>
                        <ul className="extras">
                            {extras.map(item=><li key={item}>{item}</li>)}
                        </ul>
                    </section>
                </React.Fragment>
            );
        }

        return (
            showRender
        );
    }
}

export default SingleRoom;
