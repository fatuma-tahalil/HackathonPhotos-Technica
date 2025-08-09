import { Link } from 'react-router-dom';

import * as React from 'react';
import PropTypes from 'prop-types';
//import icon from '../assets/icon.png';

import '../css/App.css';
import '../css/Photo.css';

// Imports for the photo pop-up (modal)
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PhotoModal = ({photoInfo}) => {
    /*try {
        const user = auth.currentUser;
        
        if (!user) {
            console.error('User must be logged');
            return;
        }
    } */
    return (
        <Box className="photo-modal-container">
            <Typography className="title"> {photoInfo?.title || "chicken butt..."} </Typography>
            
            {/*<div className="image-container">
                <img className="image-modal" src={icon}/>
            </div>

            <div className="photo-information">
                <img className="profile-picture"/>
                <p> username </p>
                <p> 08/09 4:05 p.m </p>
            </div>
            <p className="description"> Here is a description of the photo </p>*/}
        </Box>
    )
}   

/* Defines the photo information to be an object */
PhotoModal.propTypes = {
    //photoInfo: PropTypes.object.isRequired,
        photoInfo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        // Only require what you actually use
    }).isRequired,
};

export default PhotoModal;