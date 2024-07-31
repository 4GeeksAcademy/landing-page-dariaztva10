import React from "react";
import Navbar from "./navbar"
import "../../styles/index.css"
import Jumbotron from "./jumbotron";



//create your first component
const Home = () => {
	return (
		<div>
		<Navbar/>
		<Jumbotron/>
		<Card/>
		</div>


	);
};

export default Home;
