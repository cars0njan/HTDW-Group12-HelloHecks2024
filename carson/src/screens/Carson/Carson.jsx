import React from "react";
import { SmallLogo } from "../../components/SmallLogo";
import { Navbar } from "../../icons/Navbar";
import "./style.css";

export const Carson = () => {
  return (
    <div className="carson">
      <div className="div">
        <Navbar className="nav-bar" />
        <SmallLogo className="small-logo-instance" />
        <div className="others">
          <div className="overlap">
            <p className="text-wrapper-2">
              Studying towards DS Major!,
              <br />
              TeaDot matcha is better than ChatTime :)
            </p>
          </div>
        </div>
        <div className="others-name">Others</div>
        <div className="linkedin">
          <div className="div-wrapper">
            <div className="text-wrapper-3">LinkedIn @</div>
          </div>
        </div>
        <div className="email">
          <input className="input" placeholder="sc.carson.jan@gmail.com" type="email" />
        </div>
        <div className="instagram">
          <div className="div-wrapper">
            <div className="text-wrapper-2">@cars0n_jan</div>
          </div>
        </div>
        <div className="contacts-name">Contacts</div>
        <div className="interests">
          <div className="overlap-2">
            <p className="text-wrapper-2">
              Guitar, Sushi, Ramen, Skating, Baking, <br />
              Anime, Coding, Hackathon
            </p>
          </div>
        </div>
        <div className="interests-name">Interests</div>
        <div className="school">
          <div className="overlap-2">
            <p className="text-wrapper-2">
              UBC, CSPC 110, CPSC 121, DSCI 100,
              <br />
              PHYS 117
            </p>
          </div>
        </div>
        <div className="school-name">School/ Occupation</div>
        <div className="name">
          <div className="overlap-3">
            <div className="rectangle" />
            <div className="text-wrapper-4">Carson</div>
          </div>
        </div>
        <div className="name-name">Name</div>
        <div className="splice">(splice entry with commas)</div>
        <div className="text-wrapper-5">Profile</div>
      </div>
    </div>
  );
};
