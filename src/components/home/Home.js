import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="title">Welcome!</div>
      <Link to="/register" className="regButton">
        Register Here
      </Link>
    </div>
  );
}
