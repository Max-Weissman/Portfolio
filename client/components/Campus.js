import React from 'react';
import Iframe from 'react-iframe'

const Pixi = () => {
    return(<div>
                <h2>Campus</h2>
                <div className="paragraph">A prototype app that manages a university with multiple campuses and students.</div>
                <br />
                <div>Technologies: React, Redux, Axios, Express, Sequelize</div>
                <div>Language: Javascript</div>
                <br />
                <Iframe url="https://www.youtube.com/embed/JciP316S4mo"
                    width="450px"
                    height="450px"
                    display="initial"
                    position="relative"/>
           </div>)
}

export default Pixi