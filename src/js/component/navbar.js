import React from "react";
import { Link } from "react-router-dom";
import { DropDownFav } from "./dropdownfav";

export const Navbar = () => {
	const styleimg = {
		maxHeight: "3rem"
	};
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 px-5">
			<Link to="/">
				<img
					src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"
					style={styleimg}
				/>
			</Link>
			<DropDownFav />
		</nav>
	);
};
