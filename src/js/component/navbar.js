import React from "react";
import { Link } from "react-router-dom";
import { DropDownFav } from "./dropdownfav";

export const Navbar = () => {
	const styleimg = {
		height: "40px"
	};
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 px-5">
			<Link to="/">
				<img
					src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
					style={styleimg}
				/>
			</Link>
			<DropDownFav />
		</nav>
	);
};
