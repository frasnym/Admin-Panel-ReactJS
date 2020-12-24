import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/css/bootstrap.min.css";
import "./App.css";

import SignInPage from "./containers/Auth/SignInPage/SignInPage";
import DashboardPage from "./containers/DashboardPage/DashboardPage";
import UserPage from "./containers/Master/UserPage/UserPage";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact component={SignInPage} />
					<Route path="/dashboard" component={DashboardPage} />
					<Route path="/master/user" component={UserPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
