import { Link } from 'react-router-dom';
import { auth } from '../firebase/config.ts';
import * as React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import icon from '../assets/icon.png';

import { fetchUserWhoPosted } from '../firebase/fetchUserWhoPosted.ts';

import '../css/App.css';
import '../css/Photo.css';

// Imports for the photo pop-up (modal)
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';

const PhotoModal = ({photoInfo}) => {
    const [user, setUser] = useState();

    /* Fetches the user who posted the pictures information */
    useEffect(() => {
        const fetchUserInfo = async() => {
            if (!photoInfo?.userID) return;
            try{
                // We pass in the user ID in order to query for the user
                const user = await fetchUserWhoPosted(photoInfo.userID);
                setUser(user);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUserInfo();
    }, [photoInfo?.userID])

    return (
        <Box className="photo-modal-container">
            <Typography className="title"> {photoInfo?.title || "Loading title..."} </Typography>
            
            <Box className="image-container">
                <img className="image-modal" src={photoInfo?.imagePath} alt="A chicken. Kidding it's just what you clicked on"/>
            </Box>

            <Box className="photo-information">
                <Chip
                    avatar={<Avatar alt="Profile" src={user?.profileURL} />}
                    label={user?.name || "loading name..."}
                    variant="outlined"
                    size="lg"
                />
                <p> {photoInfo?.createdAt ?
                    photoInfo.createdAt.toDate().toLocaleString()
                    : "No date"}
                </p>
            </Box>
            <p className="description"> {photoInfo?.description || "no description"} </p>
        </Box>
    )
}   

/* Defines the photo information to be an object */
PhotoModal.propTypes = {
    photoInfo: PropTypes.object.isRequired,
};

export default PhotoModal;