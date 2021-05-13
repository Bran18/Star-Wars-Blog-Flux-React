import React, { Component, useEffect, useState, useContext } from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

let initialPeople = {
	properties: {
		height: "172",
		mass: "77",
		hair_color: "blond",
		skin_color: "fair",
		eye_color: "blue",
		birth_year: "19BBY",
		gender: "male",
		created: "2021 - 03 - 12T19: 25: 06.429Z",
		edited: "2021 - 03 - 12T19: 25: 06.429Z",
		name: "Luke Skywalker",
		homeworld: "https://www.swapi.tech/api/planets/1",
		url: "https://www.swapi.tech/api/people/1"
	},
	description: "A person within the Star Wars universe",
	_id: "5f63a36eee9fd7000499be42",
	uid: "1",
	__v: 0
};

export const CardCharacters = props => {
	const cardStyle = {
		width: "18rem"
	};

	const { store, actions } = useContext(Context);
	const [People, setPeople] = useState(initialPeople);

	let URL = "https://www.swapi.tech/api/";
	let detailURL = "people/details/" + props.PeopleID;

	async function fnPeople() {
		const response = await fetch(URL + "people/" + props.PeopleID)
			
			.then(res => {
				if (res.status == 200) {
					return res.json();
					console.log(res.json());
				}
			})
			.then(response => {
				setPeople(response.result);
			})
			.catch(err => console.error(err));
		//console.log(response);
	}

	useEffect(() => {
		fnPeople();
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
				<h5 className="card-title">{People.properties.name}</h5>
				<p className="card-text text-wrap m-0">Gender: {People.properties.gender}</p>
				<p className="card-text text-wrap m-0">Hair Color: {People.properties.hair_color}</p>
				<p className="card-text text-wrap m-0">Eye-Color: {People.properties.eye_color}</p>
				<div className="mt-2">
					<Link to={detailURL} className="btn btn-outline-primary text-primary">
						Learn more!
					</Link>
					<a
						className="btn btn-outline-warning text-warning float-right"
						onClick={() => actions.changeFavoritePeople(props.PeopleID)}>
						{store.people.map((item, i) => {
							if (item.uid === props.PeopleID) {
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

CardCharacters.propTypes = {
	PeopleID: PropType.string
	// 2) add here the new properties into the proptypes object
};