import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router.js";

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;

const routes = [
  { path: "/", component: <Home /> },
  { path: "/about", component: <About /> },
  { path: "/contact", component: <Contact /> },
];
const App: React.FC<{ currentPath?: string }> = ({ currentPath }) => (
  <Router routes={routes} currentPath={currentPath} />
);

if (typeof document !== "undefined") {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
  } else {
    console.error("Root element not found!");
  }
}

export { App };
