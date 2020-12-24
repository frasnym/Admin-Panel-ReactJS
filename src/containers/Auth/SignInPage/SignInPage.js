import React, { useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";

import logo from "../../../logo.svg";

import Layout from "../../../components/Layout/Layout";
import Input from "../../../components/UI/Input/Input";
import Copyright from "../../../components/Copyright/Copyright";

export default function SignInPage() {
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);
	console.log(rememberMe);

	return (
		<Layout>
			<Form className="mb-3 ">
				<Image src={logo} fluid width="100px" />
				<h1 className="h3 mb-3 fw-normal">
					Sign in to start your session
				</h1>
				<Input
					type="text"
					placeholder="Email address"
					value={emailAddress}
					onChange={(e) => setEmailAddress(e.target.value)}
				/>
				<Input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Row className="mb-3">
					<Col className="align-self-center">
						<Form.Check
							type="checkbox"
							label="Remember me"
							onChange={(e) => setRememberMe(e.target.checked)}
						/>
					</Col>
					<Col className="text-end">
						<Button variant="primary">Sign In</Button>
					</Col>
				</Row>
				<div class="d-grid gap-2 mb-5">
					<Button variant="danger">
						<FaGoogle className="mw-100 mh-100 align-middle me-2" />
						<span className="align-middle">
							Sign In with Google
						</span>
					</Button>
				</div>
				<Copyright />
			</Form>
		</Layout>
	);
}
