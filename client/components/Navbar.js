import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav>
        <Link to="/Haven">Haven</Link>
        <Link to="/Tavern">Tavern</Link>
        <Link to="/Pixi">Pixi</Link>
        <Link to="/Synaptic">Synaptic</Link>
        <Link to="/Social">Social</Link>
        <Link to="/Campus">Campus</Link>
    </nav>
);

export default Navbar