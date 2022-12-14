import React from 'react';
import Iframe from 'react-iframe'

const Pixi = ({history}) => {
    history.replace('/Portfolio')
    return(<div className="transition">
                <h2>Tavern Minis</h2>
                <div className="paragraph">An online store for purchasing character minis, monster minis, paints, dice and various accessories. 
                This app allows users to add, edit and checkout their cart.
                Admin users can update the catalogue of products and look at other user's information.</div>
                <br />
                <div>Technologies: React, Redux, Axios, Express, Sequelize</div>
                <div>Language: Javascript</div>
                <br />
                <Iframe url="https://www.youtube.com/embed/cMEuC60_0kA"
                    width="450px"
                    height="450px"
                    display="initial"
                    position="relative"/>
                <br />
                <a className="code" href="https://github.com/Tavern-Minis/Tavern-Minis">Source Code</a>
                <br />
           </div>)
}

export default Pixi
