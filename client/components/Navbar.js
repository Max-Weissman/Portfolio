import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav>
        <h3>Projects</h3>
        <Link to="/Haven">Haven</Link>
        <Link to="/Tavern">Tavern Minis</Link>
        <Link to="/Pixi">Princess Pixi</Link>
        <Link to="/Synaptic">Synaptic Apps</Link>
        <Link to="/Social">The Social Network</Link>
        <Link to="/Campus">Campuses</Link>
    </nav>
);

export default Navbar