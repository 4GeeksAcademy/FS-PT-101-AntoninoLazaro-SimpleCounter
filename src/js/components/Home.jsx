import React from "react";
import { Clock } from "./Clock.jsx";

// Create your first component
const Home = (prompts) => {
	const primerDigito = prompts.value % 10;
	const segundoDigito = (Math.floor(prompts.value/10)%10);
	const tercerDigito = (Math.floor(prompts.value/100)%10);
	const cuartoDigito = (Math.floor(prompts.value/1000)%10);
	const quintoDigito = (Math.floor(prompts.value/10000)%10);


	return (
		<div className="container">
			<div className="row text-center justify-content-center bg-dark rounded mt-3 justify-content-around m-2">
					<Clock value={<i className="fa fa-clock"></i>} />
					<Clock value = {quintoDigito}/>
					<Clock value = {cuartoDigito}/>
					<Clock value = {tercerDigito}/>
					<Clock value = {segundoDigito}/>
					<Clock value = {primerDigito}/>
			</div>
		</div>
	);
};

export default Home;