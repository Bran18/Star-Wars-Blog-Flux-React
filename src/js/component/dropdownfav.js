import React, { Component, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const DropDownFav = props => {
	const { store, actions } = useContext(Context);
	const [fav, fnfav] = useState(false);

	const Counter = () => {
		let x = 0;
		store.people.forEach(element => {
			if (element.favorite) {
				x++;
			}
		});
		store.planets.forEach(element => {
			if (element.favorite) {
				x++;
			}
		});
		if (x > 0) {
			fnfav(true);
		} else {
			fnfav(false);
		}
		return <span className="mr-1 p-1 bg-light text-body rounded">{x}</span>;
	};

	if (!fav) {
		return (
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						<Counter /> Favorites
						<i className="fas fa-heart px-2" />
					</button>
					<div
						className="dropdown-menu dropdown-menu-right"
						aria-labelledby="dropdownMenuButton"
						style={{ width: "max-content" }}>
						<div className="row my-0 ml-0 mr-2 text-center">
							<a className="dropdown-item pl-2">(Empty)</a>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						<Counter /> Favorites
						<i className="fas fa-heart px-2" />
					</button>
					<div
						className="dropdown-menu dropdown-menu-right"
						aria-labelledby="dropdownMenuButton"
						style={{ width: "max-content" }}>
						{store.people.map((item, i) => {
							if (item.favorite) {
								return (
									<div className="row my-0 ml-0 mr-2" key={"people" + i}>
										<Link to={"/people/details/" + item.uid} replace>
											<a className="dropdown-item pl-2">{item.name}</a>
										</Link>
										<i
											className="far fa-trash-alt mt-2 ml-auto mr-0"
											onClick={() => actions.changeFavoritePeople(item.uid)}
											style={{ cursor: "pointer" }}
										/>
									</div>
								);
							}
						})}
						{store.planets.map((item, i) => {
							if (item.favorite) {
								return (
									<div className="row my-0 ml-0 mr-2" key={"planet" + i}>
										<Link to={"/planets/details/" + item.uid} replace>
											<a className="dropdown-item pl-2">{item.name}</a>
										</Link>
										<i
											className="far fa-trash-alt mt-2  ml-auto mr-0"
											onClick={() => actions.changeFavoritePlanet(item.uid)}
											style={{ cursor: "pointer" }}
										/>
									</div>
								);
							}
						})}
					</div>
				</div>
			</div>
		);
	}
};
