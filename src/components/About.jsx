import React from "react";
import beach_photo from "../images/beach.jpeg";
import Title from "./Title";

const About = () => {
  const aboutTitle = "About";
  return (
    <>
      {" "}
      <section className="section" id="about">
        <Title title={"À propos"} suBtitle={"de nous"} />
        <div className="section-center about-center">
          <div className="about-img">
            <img
              src={beach_photo}
              className="about-photo"
              alt="awesome beach"
            />
          </div>
          <article className="about-info">
            <h3>explore the difference</h3>
            <p>
              Bienvenue chez Guadeloupe Dream, une équipe de jeunes passionnés
              par ce paradis et déterminés à vous offrir une expérience de
              voyage unique. Nous croyons en l'authenticité, en la découverte
              hors des sentiers battus et en la magie des rencontres locales.
            </p>
            <p>
              Notre différence réside dans nos guides, des jeunes locaux qui
              respirent l'âme de l'île Papillons. Ils connaissent des lieux que
              même les cartes ne répertorient pas, des recoins secrets et des
              trésors cachés. Grâce à leur connaissance intime de la culture, de
              la cuisine, et des traditions guadeloupéennes, ils vous feront
              vivre une aventure authentique.
            </p>
            <a href="#about" className="btn">
              En savoir plus
            </a>
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
