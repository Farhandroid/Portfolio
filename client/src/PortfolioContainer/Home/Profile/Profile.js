import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://www.facebook.com/tanvir567/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-facebook-square" />
              </a>
              <a
                href="https://www.linkedin.com/in/farhan-tanvir-b08520151/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin-square" />
              </a>
              <a
                href="https://github.com/farhandroid"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github-square" />
              </a>
              <a
                href="https://medium.com/@farhan-tanvir"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-medium" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Farhan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1000,
                    "Mobile and Web Developer 💻",
                    1000,
                    "Swift/Java/Kotlin📱",
                    1000,
                    "Cross Platform Dev 🔴",
                    1000,
                    "React/React Native 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building Mobile and Web application with Passion.
            </span>
          </div>

          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
