import React from "react";
import { Clock } from "./Clock.jsx";

// Create your first component
const Home = (prompts) => {
	const primerDigito = prompts.valor % 10;
	const segundoDigito = Math.floor(prompts.valor / 10) % 10;
	const tercerDigito = Math.floor(prompts.valor / 100) % 10;
	const cuartoDigito = Math.floor(prompts.valor / 1000) % 10;
	const quitoDigito = Math.floor(prompts.valor / 10000) % 10;
	const sextoDigito = Math.floor(prompts.valor / 100000) % 10;


	return (
		<div className="container">
			<div className="row text-center">
				<div className="col-12 d-flex flex-row justify-content-center bg-dark rounded mt-3">
					<Clock value={<i className="fa fa-clock"></i>} />
					<Clock value={sextoDigito} />
					<Clock value={quitoDigito} />
					<Clock value={cuartoDigito} />
					<Clock value={tercerDigito} />
					<Clock value={segundoDigito} />
					<Clock value={primerDigito} />
				</div>
			</div>
		</div>
	);
};

export default Home;