import React from 'react';
import Iframe from 'react-iframe'

const Pixi = () => {
    return(<div>
                <h2>The Social Network</h2>
                <div className="paragraph">The Social Network is an app for recording your social connections. 
                Input your relation and closeness to anyone you know and watch a network graph slowly build out.</div>
                <br />
                <div>Technologies: SQL, HTML, CSS, Flask, Jinja</div>
                <div>Languages: Python, Javascript</div>
                <br />
                <Iframe url="https://www.youtube.com/embed/v3z8Dmgd1Ns"
                    width="450px"
                    height="450px"
                    display="initial"
                    position="relative"/>
           </div>)
}

export default Pixi