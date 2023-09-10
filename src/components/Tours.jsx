import React from "react";
import Title from "./Title";
import { excursionData } from "../data/data";


const Tours = () => {
  return (
    <>
      {" "}
      <section className="section" id="tours">
        <Title title={"Nos"} suBtitle={"excursions"} />

        <div className="section-center featured-center">
          {excursionData.map((data) => {
            const{id, h4, h4_desc, img, img_desc, date, location} = data
            return (
           
                <article key={data.id} className="tour-card">
                  <div className="tour-img-container">
                    <img
                      src={data.img}
                      className="tour-img"
                      alt={data.img_desc}
                    />
                    <p className="tour-date">{data.date}</p>
                  </div>
                  <div className="tour-info">
                    <div className="tour-title">
                      <h4>{data.h4}</h4>
                    </div>
                    <p>
                   {data.h4_desc}
                    </p>
                    <div className="tour-footer">
                      <p>
                        <span>
                          <i className="fas fa-map"></i>
                        </span>{" "}
                    {data.location}
                      </p>
                  
               
                    </div>
                  </div>
                </article>
    
            );
          })}
          {/* <article className="tour-card">
            <div className="tour-img-container">
              <img src="./images/tour-1.jpeg" className="tour-img" alt="" />
              <p className="tour-date">august 26th, 2020</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>Tibet Adventure</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.
              </p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  china
                </p>
                <p>6 days</p>
                <p>from $2100</p>
              </div>
            </div>
          </article>

          <article className="tour-card">
            <div className="tour-img-container">
              <img src="./images/tour-2.jpeg" className="tour-img" alt="" />
              <p className="tour-date">october 1th, 2020</p>
            </div>
            <div className="tour-info">
              <h4>best of java</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.
              </p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  indonesia
                </p>
                <p>11 days</p>
                <p>from $1400</p>
              </div>
            </div>
          </article>

          <article className="tour-card">
            <div className="tour-img-container">
              <img src="./images/tour-3.jpeg" className="tour-img" alt="" />
              <p className="tour-date">september 15th, 2020</p>
            </div>
            <div className="tour-info">
              <h4>explore hong kong</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.
              </p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  hong kong
                </p>
                <p>8 days</p>
                <p>from $5000</p>
              </div>
            </div>
          </article>

          <article className="tour-card">
            <div className="tour-img-container">
              <img src="./images/tour-4.jpeg" className="tour-img" alt="" />
              <p className="tour-date">december 5th, 2019</p>
            </div>
            <div className="tour-info">
              <h4>kenya highlights</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.
              </p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  kenya
                </p>
                <p>20 days</p>
                <p>from $3300</p>
              </div>
            </div>
          </article> */}
        </div>
      </section>
    </>
  );
};

export default Tours;
