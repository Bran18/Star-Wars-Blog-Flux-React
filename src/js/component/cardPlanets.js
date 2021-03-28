import React, { Component, useEffect, useState, useContext } from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

let initialPlanet = {
	properties: {
		diameter: "10465",
		rotation_period: "23",
		orbital_period: "304",
		gravity: "1 standard",
		population: "200000",
		climate: "arid",
		terrain: "desert",
		surface_water: "1",
		created: "2021-03-13T19:54:30.754Z",
		edited: "2021-03-13T19:54:30.754Z",
		name: "Tatooine",
		url: "https://www.swapi.tech/api/planets/1"
	},
	description: "A planet.",
	_id: "5f7254c11b7dfa00041c6fae",
	uid: "1",
	__v: 0
};

export const CardPlanets = props => {
	const cardStyle = {
		width: "20rem"
	};

	const { store, actions } = useContext(Context);
	const [Planet, setPlanet] = useState(initialPlanet);

	const URL = "https://swapi.dev/api/";
	let detailURL = "planets/details/" + props.PlanetID;

	async function fnPlanet() {
		const response = await fetch(URL + "planets/" + props.PlanetID)
			.then(res => {
				if (res.status == 200) {
					return res.json();
				}
			})
			.then(response => {
				setPlanet(response.result);
			})
			.catch(err => console.error(err));
	}

	useEffect(() => {
		fnPlanet();
	}, []);

	return (
		<div className="card m-3" style={cardStyle}>
			<svg
				className="bd-placeholder-img card-img-top"
				width="100%"
				height="180"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="xMidYMid slice"
				focusable="false"
				role="img"
				aria-label="Placeholder: Image cap">
				<title>Placeholder</title>
				<rect width="100%" height="100%" fill="#868e96" />
				<text x="35%" y="50%" fill="#dee2e6" dy=".3em">
					Image cap
				</text>
			</svg>
			<div className="card-body">
				<h5 className="card-title">{Planet.properties.name}</h5>
				<p className="card-text text-wrap m-0">Climate: {Planet.properties.climate}</p>
				<p className="card-text text-wrap m-0">Terrain: {Planet.properties.terrain}</p>
				<p className="card-text text-wrap m-0">Population: {Planet.properties.population}</p>
				<div className="mt-2">
					<Link to={detailURL} className="btn btn-outline-primary text-primary">
						Learn more!
					</Link>
					<a
						className="btn btn-outline-warning text-warning float-right"
						onClick={() => actions.changeFavoritePlanet(props.PlanetID)}>
						{store.planets.map((item, i) => {
							if (item.uid === props.PlanetID) {
								if (item.favorite) {
									return <i className="fas fa-heart" key={i} />;
								} else {
									return <i className="far fa-heart" key={i} />;
								}
							}
						})}
					</a>
				</div>
			</div>
		</div>
	);
};

CardPlanets.propTypes = {
	PlanetID: PropType.string
	// 2) add here the new properties into the proptypes object
};
