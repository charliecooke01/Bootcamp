import React from 'react';
import './BusinessCard.css';
import '../index.css';
import myImage from '/Bootcamp/MyWork/week-9/W9-S2-Style-and-State/5_Images/exercise/images/40.jpg';

function BusinessCard({contact}) {

  const {name, position, email, phone, website, photo} = contact;

  return (
    <div className="business-card">
      <div className="photo-placeholder">
        <img className="avatar-image" src={myImage} alt="My Image" />
      </div>
      <div className="contact-info">
        <h2>{name}</h2>
        <p>Position: {position}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>
      </div>
    </div>
  );
}

export default BusinessCard;
