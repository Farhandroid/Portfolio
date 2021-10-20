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
        "This is a multilingual responsive website of a Renown Company of japan. It was made by pixel perfect design according to guideline provided in Figma. ",
      subHeading:
        "Technologies Used: React, Typescript, Gatsby, GraphQL, Contentful",
    },
    {
      title: "Admin Panel",
      duration: { fromDate: "", toDate: "" },
      description:
        "This is an admin panel of SAAS software. This web application shows summary of the company’s sales and handle large set of data. ",
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

  const resumeDetails = [
    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Ehizeex Technoloy"}
          subHeading={"FULL STACK DEVELOPER INTERN"}
          fromDate={"2021"}
          toDate={"Present"}
          description={""}
        />
          <ResumeHeading
          heading={"Ehizeex Technoloy"}
          subHeading={"FULL STACK DEVELOPER INTERN"}
          fromDate={"2021"}
          toDate={"Present"}
          description={""}
        />
          <ResumeHeading
          heading={"Ehizeex Technoloy"}
          subHeading={"FULL STACK DEVELOPER INTERN"}
          fromDate={"2021"}
          toDate={"Present"}
          description={""}
        />
        {/* <div className="experience-description">
          <span className="resume-description-text">
            Currently working as MERN stack web and mobile developer and also an
            online instructor on udemy.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed an ecommerce website for client with the dashboard for
            managing the products, managing reviews, users, payment etc. .
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to develope UI as per the given
            designs.
          </span>
          <br />
        </div> */}
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
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
    </div>,

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
    </div>,

    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"East West University, Bangladesh"}
        subHeading={"BACHELOR OF  COMPUTER SCIENCE AND ENGINEERING TECHNOLOGY"}
        fromDate={"2014"}
        toDate={"2018"}
      />

      {/* <ResumeHeading
  heading={"National Youth Service Corps"}
  subHeading={"Ministry Of Science And Technogy. Uyo Akwa Ibom State"}
  fromDate={"2019"}
  toDate={"2020"}
/>
<ResumeHeading
  heading={"High School "}
  subHeading={"Command Secondary School Mbiri"}
  fromDate={"2007"}
  toDate={"2012"}
/> */}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 560;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
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

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
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

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
