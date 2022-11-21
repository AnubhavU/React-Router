import React from "react";
import "./ProfileDetails.css";
import profilePic from "../Assets/Images/ProfileImage.jpg";
import ContactInfo from "./ContactInfo";

const ProfileDetails = () => {
  return (
    <div className="profile-main">
      <img className="profile-pic" src={profilePic} alt="user-pic" />

      <div className="profile-card">
        <div className="name-text">Anubhav Utkarsh</div>
        <div className="role-text">Software Engineer</div>
        <ContactInfo info="Email" infoDetails="anubhav.utkarsh@xyramsoft.com" />
        <ContactInfo info="Mobile" infoDetails="8447253774" />
        <ContactInfo info="Location" infoDetails="Bengaluru" />
      </div>
    </div>
  );
};

export default ProfileDetails;
