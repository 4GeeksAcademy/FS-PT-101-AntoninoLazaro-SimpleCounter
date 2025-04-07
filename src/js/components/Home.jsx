import React, { useState, useEffect } from "react";
import { Clock } from "./Clock.jsx";
import { ButtonClock } from "./ButtonClock.jsx"

export const Home = () => {
	const [valorContador, setValorContador] = useState(0);
	const [active, setActive] = useState(false);
	const [isCountdown, setIsCountdown] = useState(false);
	const [alert, setAlert] = useState(0);

	useEffect(() => {
		if (valorContador == alert && alert != 0) {
			window.alert('Se ha complido el tiempo');
		}
		if (isCountdown && active) {
			setIsCountdown(false);
			setActive(false);
		}
		if (active) {
			setTimeout(() => {
				setValorContador(prevValor => prevValor + 1);
			}, 1000);
		}
		if (isCountdown) {
			setTimeout(() => {
				setValorContador(prevValor => prevValor - 1);
			}, 1000);
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
				<div className="d-flex text-center justify-content-center bg-dark rounded mt-3 justify-content-around m-2">
					<Clock value={<span className="fa fa-clock"></span>} />
					<Clock value={Math.floor(valorContador / 10000) % 10} />
					<Clock value={Math.floor(valorContador / 1000) % 10} />
					<Clock value={Math.floor(valorContador / 100) % 10} />
					<Clock value={Math.floor(valorContador / 10) % 10} />
					<Clock value={Math.floor(valorContador % 10)} />
				</div>
			</div>
			<div className="container">
				<div className="text-center justify-content-center my-5 bg-light p-1 rounded border border-dark">
					<h2>Controla el contador</h2>
					<div className="row text-center justify-content-center">
						<ButtonClock disabled={active} type={"success"} event={startStop} text={<i class="fa-solid fa-play"></i>} />
						<ButtonClock disabled={!active} type={"secondary"} event={startStop} text={<i class="fa-solid fa-pause"></i>} />
						<ButtonClock type={"danger"} event={reiniciarContador} text={<i class="fa-solid fa-stop"></i>} />
					</div>
				</div>
			</div>
			<div className="container">
				<div className="text-center justify-content-center my-5 p-2 bg-light rounded border border-dark">
					<h2>Cuenta regresiva</h2>
					<div className="row text-center justify-content-center ">
						<form className="form-control w-50" onSubmit={e => e.preventDefault()}>
							<label className="form-text p-3">
								Introduce el número
								<input className="form-control m-auto" type="number" value={valorContador} onChange={e => handleChange(e)} placeholder="Poner contador en....." />
							</label>
							<input disabled={isCountdown} onClick={() => setIsCountdown(prevValue => !prevValue)} className="mx-3 btn btn-success" type="submit" value={"Start"} />
							<input disabled={!isCountdown} onClick={() => setIsCountdown(prevValue => !prevValue)} className="mx-2 btn btn-secondary" type="submit" value={"Stop"} />
						</form>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="text-center justify-content-center my-5 p-2 bg-light rounded border border-dark">
					<h2>Crear alerta</h2>
					<div className="row text-center justify-content-center">
						<form className="form-control w-50" onSubmit={e => e.preventDefault()}>
							<label className="form-text p-3">
								Añade la alerta
								<input className="form-control m-auto" type="number" onChange={e => setAlert(prevValue => prevValue = e.target.value)} placeholder="Poner contador en....." />
							</label>
							<input onClick={() => window.alert('Alerta Creada!!')} className="mx-3 btn btn-success" type="submit" value={"Create Alert"} />
						</form>
					</div>
				</div>
			</div>
		</>
	);
};