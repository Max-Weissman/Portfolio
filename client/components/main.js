import React from 'react';
import { Route, Routes } from "react-router-dom";

import Navbar from './Navbar'
import Haven from './Haven';
import Pixi from './Pixi'

export default class Main extends React.Component{
    render(){
        return (<div>
                    <h1>Max Weissman</h1>
                    <img src="Max.jpg"/>
                    <div>I am a software developer specialized in JavaScript. As a software developer I am proficient at using methodical yet flexible problem solving techniques, tracking down the source of errors and quickly learning new tools to integrate into ongoing projects. I have a background in synthetic organic chemistry research, primarily for the pharmaceutical industry. My experiences in that field has taught me about problem solving, time management, coordinating multiple projects, communication and teamwork.</div>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<div />}/>
                        <Route path='/Haven' element={<Haven />}/>
                        <Route path='/Pixi' element={<Pixi />}/>
                    </Routes>
                </div>);
    }
}
