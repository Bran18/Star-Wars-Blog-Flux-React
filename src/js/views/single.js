import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import { DetailCharacters } from "../component/detailCharacter";
import { DetailPlannet } from "../component/detailPlanet";

export const Single = props => {
	const params = useParams();

	if (params.type === "people") {
		return (
			<div>
				<DetailCharacters PeopleID={params.theid} />
			</div>
		);
	} else {
		return (
			<div>
				<DetailPlannet PlanetID={params.theid} />
			</div>
		);
	}
};

Single.propTypes = {
	match: PropTypes.object
};
