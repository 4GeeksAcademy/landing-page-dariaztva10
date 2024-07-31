import React from "react";
import Navbar from "./navbar"
import Jumbotron from "./jumbotron";
import Cards from "./cards";
import "../../styles/index.css";
import Footer from "./footer"

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="col-12 p-5">
				<Jumbotron />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center ">
						<Cards />
					</div>
					<div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
						<Cards />
					</div>
					<div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
						<Cards />
					</div>
					<div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
						<Cards />
					</div>
				</div>
			</div>
			<Footer />
		</div>

	);
};

export default Home;
