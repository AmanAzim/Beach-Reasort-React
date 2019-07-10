import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const ViewRoom = ({room}) => {
    const {name, slug, images, price}=room;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0]} alt="image"/>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/single-room/${slug}`} className="btn-primary room-link">Features</Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    );
};

//npm install --save prop-types
ViewRoom.propTypes={
    room:PropTypes.shape({
        name:PropTypes.string,
        slug:PropTypes.string,
        images:PropTypes.arrayOf(PropTypes.string),
        price:PropTypes.number
    }).isRequired
};

export default ViewRoom;
