import React, { useState, useEffect } from "react";
import { Clock } from "./Clock.jsx";
import { ButtonClock } from "./ButtonClock.jsx"

export const Home = () => {
	const [valorContador, setValorContador] = useState(0);
	const [active, setActive] = useState(false);
	const [isCountdown, setIsCountdown] = useState(false);

	useEffect(() => {
		if (active) {
			setTimeout(() => {
				setValorContador(prevValor => prevValor + 1);
			}, 1000);
		}
		if (isCountdown){
			setTimeout(() => {
				setValorContador(prevValor => prevValor - 1);
			}, 1000);
		}
		if (isCountdown&&active){
			setIsCountdown(false);
			setActive(false);
		}
	}, [valorContador, active, isCountdown])

	const startStop = () => {
		setActive(prevValor => !prevValor);
		console.log(active);
	}

	const reiniciarContador = () => {
		setValorContador(prevValor => prevValor = 0);
	}

	const handleChange = e => {
		setValorContador(prevValor => prevValor = e.target.value);
	};

	return (
		<>
			<div className="container">
				<div className="row text-center justify-content-center bg-dark rounded mt-3 justify-content-around m-2">
					<Clock value={<span className="fa fa-clock"></span>} />
					<Clock value={Math.floor(valorContador / 10000) % 10} />
					<Clock value={Math.floor(valorContador / 1000) % 10} />
					<Clock value={Math.floor(valorContador / 100) % 10} />
					<Clock value={Math.floor(valorContador / 10) % 10} />
					<Clock value={Math.floor(valorContador % 10)} />
				</div>
			</div>
			<div className="container">
				<div className="row text-center justify-content-center my-5 bg-light">
					<h2>Controla el contador</h2>
					<div className="row text-center justify-content-center">
						<ButtonClock disabled={active} type={"success"} event={startStop} text={'Start'} />
						<ButtonClock disabled={!active} type={"secondary"} event={startStop} text={'Stop'} />
						<ButtonClock type={"danger"} event={reiniciarContador} text={'Reset'} />
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row text-center justify-content-center">
					<h2>Cuenta regresiva</h2>
					<div className="row text-center justify-content-center">
						<form className="form-control" onSubmit={e => e.preventDefault()}>
							<label className="form-text">
								Introduce el número
								<input className="form-control m-auto" type="text" value={valorContador} onChange={e => handleChange(e)} placeholder="Poner contador en....." />
							</label>
							<input disabled={isCountdown} onClick={() => setIsCountdown(prevValue => !prevValue)} className="mx-3 btn btn-success" type="submit" value={"Start"} />
							<input disabled={!isCountdown} onClick={() => setIsCountdown(prevValue => !prevValue)} className="mx-2 btn btn-secondary" type="submit" value={"Stop"} />
						</form>
					</div>
				</div>
			</div>
		</>
	);
};