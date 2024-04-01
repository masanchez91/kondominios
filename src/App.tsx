import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthRoutes from "./routes/Auth/AuthRoutes";

const App: React.FC = () => {
	return (
		<Router>
			<AuthRoutes />
		</Router>
	);
};

export default App;
