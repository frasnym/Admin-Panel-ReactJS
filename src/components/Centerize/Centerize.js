import React from "react";

import "./Centerize.css";

export default function Centerize(props) {
	return (
		<main className="centerize m-auto text-center align-items-center">
			{props.children}
		</main>
	);
}
