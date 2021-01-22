import logo from "./logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
      <div className="container">
        <Route path={["/", "/page/:page"]} exact component={BlogPost} />
      </div>
    </Router>
  );
}

export default App;
