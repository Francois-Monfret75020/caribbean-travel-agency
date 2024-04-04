import React from "react";
import axios from "axios";

const Hero = () => {
  // const onSubmit = async () => {
  //   const flespiId = 1710941;

  //   const url = `https://flespi.io/gw/devices/${flespiId}/calculate`;
  //   const token =
  //     "wlIQBVXQBZkOHhLvZ4t6bzmHIr47kIkERSiiB3W0S7EqceJZ82T7s5FYlzVt53XM";
  //   const calcId = 604753;

  //   const headers = {
  //     Authorization: "FlespiToken " + token,
  //   };

  //   const json = {
  //     calc_id: calcId,
  //   };

  //   axios
  //     .post(url, json, { headers })
  //     .then((response) => {
  //       console.log(response.data.result);
  //     })
  //     .catch((error) => {
  //       console.error("Erreur lors de la requête :", error);
  //     });
  // };

  // onSubmit();

  const sendRequest = async (flespiId) => {
    const fromTimestamp = 1698835200;
    const toTimestamp = 1699911599;
    const url = `https://flespi.io/gw/devices/${flespiId}/calculate`;
    const token =
      "wlIQBVXQBZkOHhLvZ4t6bzmHIr47kIkERSiiB3W0S7EqceJZ82T7s5FYlzVt53XM";
    const calcId = 604717;
    const headers = {
      Authorization: "FlespiToken " + token,
    };

    const json = {
      calc_id: calcId,
      from: fromTimestamp,
      to: fromTimestamp,
    };

    try {
      const response = await axios.post(url, json, { headers });
      console.log(`Response for flespiId ${flespiId}:`, response.data.result);
    } catch (error) {
      console.error(`Error for flespiId ${flespiId}:`, error);
    }
  };

  // Utilisez la fonction sendRequest avec différentes valeurs pour flespiId
  const flespiIds = [
    1710941, 1710941, 1710945, 1710949, 1710953, 1711037, 1711041, 1711045,
    1711049, 1711053, 1711057, 1891637,
  ]; // Exemple de plusieurs valeurs

  for (const flespiId of flespiIds) {
    sendRequest(flespiId);
  }
  sendRequest();
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-banner">
          <h1>Éxplorer La Guadeloupe</h1>
          <p>
            La Guadeloupe vous attend. Explorez ses trésors naturels et vivez
            une aventure caribéenne inoubliable avec nous...
          </p>
          <a href="#tours" className="btn hero-btn">
            Nos Excursions
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
