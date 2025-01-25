import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.css";
import "../static/css/index.scss";
import "../static/css/services.scss";
import "../static/css/nav.scss";
import "../static/css/hero.scss";
import "../static/css/footer.scss";
import "../static/css/features.scss";
import "../static/css/contactForm.scss";
import "../static/css/skills.scss";
import "../static/css/introSection.scss"
import "../static/css/intersectObserve.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
