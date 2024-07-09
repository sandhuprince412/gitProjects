import React from "react";
import { data } from "../restAPI.json";

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading"></h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quia totam dolores? Distinctio eos, dolorem accusantium dolores
            ipsam amet cum dolore, expedita repellendus facilis perspiciatis
            esse tempore quos nesciunt eum quidem incidunt itaque rerum. Ipsam
            quisquam neque quidem, laudantium doloremque, recusandae natus
            distinctio vero quasi veniam atque voluptatum. Ipsa, eveniet?
          </p>
        </div>
        <div className="dishes_container">
          {data[0].dishes.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
