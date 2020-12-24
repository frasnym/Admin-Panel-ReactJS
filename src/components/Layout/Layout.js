import React from "react";
import Centerize from "../Centerize/Centerize";
import LeftBar from "../LeftBar/LeftBar";

export default function Layout(props) {
	return (
		<>
			{props.leftbar ? (
				<>
					<LeftBar />
					<main>{props.children}</main>
				</>
			) : (
				// SignIn, SignUp
				<Centerize>{props.children}</Centerize>
			)}
		</>
	);
}
