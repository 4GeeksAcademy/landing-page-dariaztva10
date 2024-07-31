import React from "react";

const Jumbotron = (props) => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">A Warm Welcome</h1>
                <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum aspernatur molestias non laboriosam, aut totam provident nobis odio beatae omnis maxime iure placeat? Sequi quas exercitationem unde asperiores. Veniam, sequi.</p>
                <button className="btn btn-primary btn-lg" type="button">Call to Action!</button>
            </div>
        </div>
    );
};



export default Jumbotron;