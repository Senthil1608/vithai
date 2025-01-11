import React from "react";
import "../stylesheets/profile.css";

const Profile = ({ image, name, position, link }) => {
    return (
        <div className="profile">
            <img className="profile-image" src={image} alt={`${name}'s profile`} />
            <div className="profile-details">
                <h2 className="profile-name">{name}</h2>
                <p className="profile-position">{position}</p>
                <a className="profile-link" href={link} target="_blank" rel="noopener noreferrer">
                    View Profile
                </a>
            </div>
        </div>
    );
};

export default Profile;
