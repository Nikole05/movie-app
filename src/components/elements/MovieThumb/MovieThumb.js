import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieThumb.css';

const MovieThumb = (props) => {
    return (
        <div className="rmdb-moviethumb">
            <img src={props.image} alt="moviethumb" />
        </div>
    )
}

export default MovieThumb;
