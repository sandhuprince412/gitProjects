import React from "react";
import { data } from "../restAPI.json";

const WhoAreWe = () => {
  return (
    <section className="who_are-we" id="who_are_we">
      <div className="container">
        <div className="text_banner">
          {data[0].who_we_are.map((element) => {
            return (
              <div className="card" key={element.id}>
                <h1 className="heading" style={{ fontWeight: "300" }}>
                  {element.number}
                </h1>
                <p>{element.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
