import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
          {props.description ? (
            <div>
              <br />
              <br />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Education", logoSrc: "education.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 80 },
    { skill: "React JS", ratingPercentage: 80 },
    { skill: "React Native", ratingPercentage: 80 },
    { skill: "Swift", ratingPercentage: 80 },
    { skill: "Kotlin", ratingPercentage: 70 },
    { skill: "Java", ratingPercentage: 80 },
    { skill: "Typescript", ratingPercentage: 60 },
    { skill: "Firebase", ratingPercentage: 80 },
    { skill: "Mysql", ratingPercentage: 70 },
    { skill: "Laravel", ratingPercentage: 60 },
    { skill: "Docker", ratingPercentage: 60 },
    { skill: "Python", ratingPercentage: 60 },
  ];

  const projectsDetails = [
    {
      title: "Companys Website",
      duration: { fromDate: "", toDate: "" },
      description:
        "This is a multilingual responsive website of a Renown Company of japan. It was made by pixel perfect design according to guideline provided in Figma.",
      subHeading:
        "Technologies Used: React, Typescript, Gatsby, GraphQL, Contentful",
    },
    {
      title: "Admin Panel",
      duration: { fromDate: "", toDate: "" },
      description:
        "This is an admin panel of SAAS software. This web application shows summary of the company’s sales and handle large set of data.",
      subHeading:
        "Technologies Used:  React, Typescript, Redux, Firebase, Material Design,",
    },
    {
      title: "Inventory Management mobile application",
      duration: { fromDate: "", toDate: "" },
      description:
        "This is an inventory management application for IOS devices. This application allows the user to track the movement of products. It uses two external pieces of hardware to read data from the product's QR code and RFID.",
      subHeading: "Technologies Used: Swift, Flask,  Python, RFID scanner, AWS",
    },
    {
      title: "Cross platform Matching application",
      duration: { fromDate: "", toDate: "" },
      description:
        " This is a matching application which match according to person’s place and interest. User need be authenticated by id like passport or Zairo card to use this app.",
      subHeading:
        "Technologies Used: React Native, Firebase, Microsoft Azure Face api, Rest api. Firebase, AWS, MYSQL",
    },
    {
      title: "News mobile application with Admin panel",
      duration: { fromDate: "", toDate: "" },
      description:
        " This is an android mobile application which which shows the news. It also have admin panel in which news can be created and summery can be known.",
      subHeading: "Technologies Used: Kotlin, React, Redux, AWS, Firebase",
    },
  ];

  const getWorkExperience = () => {
    return (
      /* WORK EXPERIENCE */
      <div className="resume-screen-container" key="work-experience">
        <div className="experience-container">
          <ResumeHeading
            heading={"Techbeans , Japan "}
            subHeading={"SOFTWARE DEVELOPER"}
            fromDate={"April 2021"}
            toDate={"Present"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              -Developing and Maintaining various Mobile and Web app
            </span>
          </div>

          <span className="resume-description-text">
            - Attending in the team meetings to help on making decisions about
            project plan
          </span>
          <br />
          <span className="resume-description-text">
            -Develope UI as per the given designs.
          </span>
          <br />
          <br />
        </div>
        <div className="experience-container">
          <ResumeHeading
            heading={"Advancer Inc , Japan"}
            subHeading={"SOFTWARE DEVELOPER"}
            fromDate={"Sept 2019"}
            toDate={"March 2021"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              -Developing apps and software for different clients
            </span>
          </div>
          <span className="resume-description-text">
            -Design, code and debug applications in various software languages.
          </span>
          <br />
          <br />
        </div>

        <div className="experience-container">
          <ResumeHeading
            heading={"W3Engineers , Bangladesh"}
            subHeading={"SOFTWARE DEVELOPER"}
            fromDate={"Sept 2018"}
            toDate={"Jan 2019"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              -Participation in complete Software Development Life Cycle (SDLC)
            </span>
          </div>
          <span className="resume-description-text">
            - Completed task or project in given period.
          </span>
          <br />
        </div>
      </div>
    );
  };

  const getProgrammingSkills = () => {
    return (
      /* PROGRAMMING SKILLS */
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
        style={{ transition: "opacity 0.5s" }}
      >
        {programmingSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const getProjects = () => {
    return (
      /* PROJECTS */
      <div className="resume-screen-container" key="projects">
        {projectsDetails.map((projectsDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            description={projectsDetails.description}
            fromDate={projectsDetails.duration.fromDate}
            toDate={projectsDetails.duration.toDate}
          />
        ))}
      </div>
    );
  };

  const getEducation = () => {
    return (
      /* Education */
      <div className="resume-screen-container" key="education">
        <ResumeHeading
          heading={"East West University, Bangladesh"}
          subHeading={
            "BACHELOR OF  COMPUTER SCIENCE AND ENGINEERING TECHNOLOGY"
          }
          fromDate={"2014"}
          toDate={"2018"}
        />
      </div>
    );
  };

  const getInterest = (params) => {
    return (
      /* Interests */
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Travelling"
          description="Travelling is what i am doing most of my holiday . Mostly i like to go to nature and take a walk"
        />
        <ResumeHeading
          heading="Sports"
          description="I like sports specially water sports like rafting , Kayaking though i do not know swimming..LOL. Recently i am trying to be good at Tennis"
        />
        <ResumeHeading
          heading="Gaming"
          description="Though I am not very good at gaming but i like to play game sometimes on my PS4. Currently i am playing witcher 3"
        />
      </div>
    );
  };


  const handleBulletMenuChange = (index) => {
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleBulletMenuChange(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">
            {selectedBulletIndex === 0
              ? getWorkExperience()
              : selectedBulletIndex === 1
              ? getProgrammingSkills()
              : selectedBulletIndex === 2
              ? getProjects()
              : selectedBulletIndex === 3
              ? getEducation()
              : getInterest()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
