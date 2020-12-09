import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/css/bootstrap.min.css";
import "./App.css";

import SignInPage from "./containers/Auth/SignInPage";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" component={SignInPage} />
					<Route path="/signin" component={SignInPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
