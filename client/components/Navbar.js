import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav>
        <Link to="/Haven">Haven</Link>
        <Link to="/Pixi">Pixi</Link>
    </nav>
);

export default Navbar