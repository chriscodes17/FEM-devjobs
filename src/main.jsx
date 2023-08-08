import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>
);
