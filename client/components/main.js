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
        let history = this.props.history
        return (<div>
                    <h1>Max Weissman</h1>
                    <img className="Max" src="Max.jpg"/>
                    <div className="line">Fullstack Software Developer</div>
                    <div className="line">Technologies: Javascript, HTML, CSS, Git/Github, Node, SQL, Express, React, Redux, React Native,
                    Firebase, PostgreSQL, Machine Learning</div>
                    <div className="line">Technical Skills: Problem Solving, Debugging, Documentation, Testing</div>
                    <div className="line">Other Skills: Teamwork, Coordination, Time Management, Quick Learner</div>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<div history={history}/>}/>
                        <Route path='/Haven' element={<Haven history={history}/>}/>
                        <Route path='/Pixi' element={<Pixi history={history}/>}/>
                        <Route path='/Synaptic' element={<Synaptic history={history}/>}/>
                        <Route path='/Tavern' element={<Tavern history={history}/>}/>
                        <Route path='/Social' element={<Social history={history}/>}/>
                        <Route path='/Campus' element={<Campus history={history}/>}/>
                    </Routes>
                    <div className="row">
                        <a href="https://github.com/Max-Weissman"><img src="github.svg"/></a>
                        <a href="https://www.linkedin.com/in/max-weissman/"><img src="LinkedIn.jpg"/></a>
                    </div>
                </div>);
    }
}
