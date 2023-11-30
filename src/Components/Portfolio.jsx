/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/2.jpeg";

const imageAltText = "desktop with tasks and responsiblities";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Research profile 🎉",
    description:
      "Interested in space and science",
    url: "https://www.researchgate.net/profile/Priyanshu-Bhatia",
  },
  {
    title: "My gihub projects",
    description:
      "My projects in machine learning",
    url: "https://github.com/priyanshub21/MLSA_Task1",
  },
  {
    title: "My Resume ",
    description:
      "Created from Artificial intelligence",
    url: "https://internshala.com/user_preference/preferences",
  },
  {
    title: "Coursera ID",
    description:
      "My completed courses in ML and deep learning",
    url: "https://www.coursera.org/user/ea0bc848bf1851ba3882f04b53313b98",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
