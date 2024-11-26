import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/Routes";

function AppRoutes() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}
export default AppRoutes;
