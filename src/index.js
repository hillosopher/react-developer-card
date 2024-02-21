import React from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faSpotify,
  faSoundcloud,
  faGoodreads,
} from "@fortawesome/free-brands-svg-icons";

const skills = [
  {
    skill: "HTML",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/512px-HTML5_Badge.svg.png?20110131171049",
    imgAlt: "HTML5 logo",
  },
  {
    skill: "CSS",
    imgUrl:
      "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png",
    imgAlt: "CSS Logo",
  },
  {
    skill: "TypeScript/JS",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
    imgAlt: "JavaScript Logo",
  },
  {
    skill: "Angular",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
    imgAlt: "Angular Logo",
  },
  {
    skill: "Git",
    imgUrl: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    imgAlt: "Git Logo",
  },
  {
    skill: "Tailwind",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png",
    imgAlt: "TailWind Logo",
  },
  {
    skill: "React",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    imgAlt: "React Logo",
  },
];

function App() {
  return (
    <div className="App">
      <Avatar />
      <Information />
      <SkillsList />
      <LinksList />
    </div>
  );
}

function Avatar() {
  return (
    <div className="headshot-container">
      <img
        className="headshot"
        src=".\headshot.jpg"
        alt="Josh's headshot"></img>
    </div>
  );
}
function Information() {
  return (
    <div>
      <DevName />
      <DevDesc />
    </div>
  );
}

function DevName() {
  return <h1 className="dev-name">Josh Hill</h1>;
}
function DevDesc() {
  return (
    <p className="dev-desc">
      A self-taught developer based out of Portland, OR with a background in
      Project Management and Operations. I'm proficient in Angular, TypeScript,
      HTML, CSS, and am teaching myself React.
    </p>
  );
}
function SkillsList() {
  return (
    <div className="skills-list">
      {skills.map((skill) => (
        <Skill
          key={skill.skill}
          item={skill.skill}
          imgUrl={skill.imgUrl}
          imgAlt={skill.imgAlt}
        />
      ))}
    </div>
  );
}
function Skill({ item, imgUrl, imgAlt }) {
  return (
    <div className="skill">
      <span>{item}</span>
      <img src={imgUrl} alt={imgAlt}></img>
    </div>
  );
}

const links = [
  {
    link: "GitHub",
    url: "https://github.com/hillosopher",
    iconName: faGithub,
    imgAlt: "GitHub Logo",
  },
  {
    link: "LinkedIn",
    url: "https://www.linkedin.com/in/joshuaaabrahamhill/",
    iconName: faLinkedin,
    imgAlt: "LinkedIn Logo",
  },
  {
    link: "Facebook",
    url: "https://www.facebook.com/hillosopher/",
    iconName: faFacebook,
    imgAlt: "Facebook Logo",
  },
  {
    link: "Spotify",
    url: "https://open.spotify.com/artist/1xDdLhjgFRUNF6t6zkWjKU",
    iconName: faSpotify,
    imgAlt: "Spotify Logo",
  },
  {
    link: "Soundcloud",
    url: "https://soundcloud.com/hillosopher",
    iconName: faSoundcloud,
    imgAlt: "Soundcloud Logo",
  },
  {
    link: "Goodreads",
    url: "https://www.goodreads.com/user/show/8016604-josh",
    iconName: faGoodreads,
    imgAlt: "Goodreads Logo",
  },
];

function LinksList() {
  return (
    <div className="links-list">
      {links.map((link) => (
        <Link
          key={link.link}
          item={link.link}
          url={link.url}
          iconName={link.iconName}
          imgAlt={link.imgAlt}
        />
      ))}
    </div>
  );
}
function Link({ url, imgAlt, iconName }) {
  return (
    <div className="link-container">
      <a href={url} target="blank">
        <FontAwesomeIcon icon={iconName} alt={imgAlt} className="link" />
      </a>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
