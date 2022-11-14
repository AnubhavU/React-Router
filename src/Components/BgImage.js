import React, { useState } from "react";
import "./BgImage.css";
import DefaultBg from "../Assets/Images/city.gif";
import HillBg from "../Assets/Images/mountain.gif";
import BeachBg from "../Assets/Images/beach.gif";
import ProfileDetails from "./ProfileDetails";

export function BgImage() {
  const [bg, setBgPic] = useState("");
  const hillSrc = HillBg;
  const beachSrc = BeachBg;
  const buttonStyle = {
    marginTop: "1rem",
    padding: "0.2rem 1rem",
  };

  function changeBg(name) {
    setBgPic(name);
  }

  return (
    <div>
      <div className="background">
        <img
          className="bg-pic"
          src={bg === "hill" ? hillSrc : bg === "beach" ? beachSrc : DefaultBg}
          alt="bg-image"
        />

        <ProfileDetails />

        <div className="footer">
          <span>Choose your liking -</span>
          <input
            id="hill"
            type="radio"
            name="bg"
            value={bg}
            checked={bg === "hill"}
            onChange={() => changeBg("hill")}
          />{" "}
          <label htmlFor="hill">Mountains</label>
          <input
            id="beach"
            type="radio"
            name="bg"
            value={bg}
            checked={bg === "beach"}
            onChange={() => changeBg("beach")}
          />{" "}
          <label htmlFor="beach">Beaches</label> <br />
          <button
            className="pulse"
            style={buttonStyle}
            onClick={() => setBgPic("")}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default BgImage;
