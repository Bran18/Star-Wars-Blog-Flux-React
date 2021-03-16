import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { CardCharacters } from "../component/cardCharacters";
import { CardPlanets } from "../component/cardPlanets";

export const Home = () => {
	const [Peoplelist, setPeopleList] = useState([]);
	const [Planetslist, setPlanetsList] = useState([]);

	let URL = "https://www.swapi.tech/api/";

	async function fnPeopleList() {
		//const result = await fetch(URL + "people/")
		const result = await fetch("https://raw.githubusercontent.com/johmstone/files/main/peopleresponse.json")
			.then(res => {
				if (res.status == 200) {
					return res.json();
				}
			})
			.catch(err => console.error(err));
		setPeopleList(result.results);
	}

	async function fnPLanetsList() {
		//const result = await fetch(URL + "people/")
		const result = await fetch("https://raw.githubusercontent.com/johmstone/files/main/JSONResultPlanets.json")
			.then(res => {
				if (res.status == 200) {
					return res.json();
				}
			})
			.catch(err => console.error(err));
		setPlanetsList(result.results);
	}

	useEffect(() => {
		fnPeopleList();
		fnPLanetsList();
	}, []);

	// const CardPeoplelist =
	// 	);
	// });

	return (
		<div className="container text-font-base">
			<h2 className="text-danger">Characters</h2>
			<div className="testimonial-group">
				<div className="row">
					{Peoplelist.map((people, i) => (
						<div className="cardhorizontal" key={i}>
							<CardCharacters PeopleID={people.uid} />
						</div>
					))}
				</div>
			</div>
			<h2 className="text-danger mt-3">Planets</h2>
			<div className="testimonial-group">
				<div className="row">
					{Planetslist.map((planet, i) => (
						<div className="cardhorizontal" key={i}>
							<CardPlanets PlanetID={planet.uid} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
