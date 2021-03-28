import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

import { CardCharacters } from "../component/cardCharacters";
import { CardPlanets } from "../component/cardPlanets";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-font-base">
			<h2 className="text-danger">Characters</h2>
			<div className="testimonial-group">
				<div className="row">
					{store.people.map((person, i) => (
						<div className="cardhorizontal" key={i}>
							<CardCharacters PeopleID={person.uid} />
						</div>
					))}
				</div>
			</div>
			<h2 className="text-danger mt-3">Planets</h2>
			<div className="testimonial-group">
				<div className="row">
					{store.planets.map((planet, i) => (
						<div className="cardhorizontal" key={i}>
							<CardPlanets PlanetID={planet.uid} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
