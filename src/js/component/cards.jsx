import React from "react";

const Cards = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="https://i.blogs.es/6717aa/camera-traps---ru/1366_2000.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam veritatis corrupti, sit rem vel ad exercitationem impedit itaque facilis earum commodi amet, quos nostrum. Exercitationem aliquid voluptas odit nesciunt nobis!.</p>
        <a href="#" className="btn btn-primary">Find out more!</a>
      </div>
    </div>
  );
};

export default Cards; 