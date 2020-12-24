import React from "react";
import Centerize from "../Centerize/Centerize";

export default function Layout(props) {
	return (
		<>
			{props.sidebar ? (
				props.children
			) : (
				// SignIn, SignUp
				<Centerize>{props.children}</Centerize>
			)}
		</>
	);
}
