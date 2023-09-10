import React from "react";

const Title = ({ title, suBtitle }) => {
  return (
    <>
      {" "}
      <div className="section-title">
        <h2>
          {title} <span>{suBtitle}</span>
        </h2>
      </div>{" "}
    </>
  );
};

export default Title;
