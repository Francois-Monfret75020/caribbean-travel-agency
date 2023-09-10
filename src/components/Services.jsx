import React from "react";
import Title from "./Title";
import { service } from "../data/data";

const Services = () => {
  return (
    <>
      <section className="section services" id="services">
        <Title title={"Nos"} suBtitle={"services"} />
        <div className="section-center services-center">
          {service.map((service) => {
            return (
              <article key={service.id} className="service">
                <span className="service-icon">
                  <i className={service.icon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-text">
                   {service.desc}
                  </p>
                </div>
              </article>
            );
          })}

          {/*

    <article className="service">
      <span className="service-icon">
        <i className="fas fa-tree fa-fw"></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">endless hiking</h4>
        <p className="service-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Asperiores, officia.
        </p>
      </div>
    </article>

    <article className="service">
      <span className="service-icon">
        <i className="fas fa-socks fa-fw"></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">amazing comfort</h4>
        <p className="service-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Asperiores, officia.
        </p>
      </div>
    </article> */}
        </div>
      </section>
    </>
  );
};

export default Services;
