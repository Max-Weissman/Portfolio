import React from 'react';
import { Route, Routes } from "react-router-dom";

import Navbar from './Navbar'
import Haven from './Haven';
import Pixi from './Pixi'
import Synaptic from './Synaptic'
import Tavern from './Tavern'
import Social from './Social'
import Campus from './Campus'

export default class Main extends React.Component{
    render(){
        return (<div>
                    <h1>Max Weissman</h1>
                    <img src="Max.jpg"/>
                    <div>Max is a software developer specialized in JavaScript. 
                    As a software developer Max is proficient at using methodical yet flexible problem solving techniques, 
                    tracking down the source of errors and quickly learning new tools to integrate into ongoing projects. 
                    Max has a background in synthetic organic chemistry research, primarily for the pharmaceutical industry. 
                    His experiences in that field has taught him about 
                    problem solving, time management, coordinating multiple projects, communication and teamwork.</div>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<div />}/>
                        <Route path='/Haven' element={<Haven />}/>
                        <Route path='/Pixi' element={<Pixi />}/>
                        <Route path='/Synaptic' element={<Synaptic />}/>
                        <Route path='/Tavern' element={<Tavern />}/>
                        <Route path='/Social' element={<Social />}/>
                        <Route path='/Campus' element={<Campus />}/>
                    </Routes>
                </div>);
    }
}
