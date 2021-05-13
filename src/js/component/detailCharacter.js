import React, { Component, useEffect, useState } from "react";
import PropType from "prop-types";

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

export const DetailCharacters = props => {
	const [People, setPeople] = useState(initialPeople);

	let URL = "https://www.swapi.tech/api/";
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
		<div className="container text-font-base">
			<div className="jumbotron">
				<div className="row row-cols-2">
					<div className="col-5">
						<svg
							className="bd-placeholder-img card-img-top"
							width="100%"
							height="100%"
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
					</div>
					<div className="col-7">
						<h1 className="text-danger">{People.properties.name}</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipiscing elit vehicula, sagittis vestibulum fusce
							cursus velit class varius, donec a nunc accumsan aptent diam suspendisse. Fringilla quisque
							fames fusce nostra blandit commodo cras nec, aliquam ante est vivamus taciti lacinia mollis
							aliquet aptent, nunc etiam lobortis dui dictum netus feugiat. Congue cursus cum tristique
							lacinia consequat volutpat, euismod fringilla pretium hac conubia scelerisque, auctor
							interdum sociosqu mauris per.
						</p>
					</div>
				</div>
				<hr />
				<div className="row">
					<table className="table table-responsive table-borderless">
						<tbody>
							<tr className="text-danger font-weight-bold">
								<td>Name</td>
								<td className="text-center">Birth Year</td>
								<td className="text-center">Gender</td>
								<td className="text-center">Height</td>
								<td className="text-center">Skin Color</td>
								<td className="text-center">Eye Color</td>
							</tr>
							<tr>
								<td className="text-center">{People.properties.name}</td>
								<td className="text-center">{People.properties.birth_year}</td>
								<td className="text-center">{People.properties.gender}</td>
								<td className="text-center">{People.properties.height}</td>
								<td className="text-center">{People.properties.skin_color}</td>
								<td className="text-center">{People.properties.eye_color}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

DetailCharacters.propTypes = {
	PeopleID: PropType.string
	// 2) add here the new properties into the proptypes object
};