import React from 'react';
import Iframe from 'react-iframe'

const Pixi = ({history}) => {
    history.replace('/')
    return(<div>
                <h2>Color Gradient and Pixelate Maze</h2>
                <div className="paragraph">Two apps using the neural networking tool, Synaptic, for machine learning.
                The Color Gradient app takes in a wavelength of color and outputs its best guess of what the RGB value would be. 
                The Pixelate Maze app allows you to draw mazes that can be checked for solvability either through an algorithm or using the trained
                neural network that is 99% effective.</div>
                <br />
                <div>Technologies: Synaptic, React</div>
                <div>Language: Javascript</div>
                <br />
                <Iframe url="https://www.youtube.com/embed/tcuVHvCbkDA"
                    width="450px"
                    height="450px"
                    display="initial"
                    position="relative"/>
                <br />
                <a className="code" href="https://github.com/Max-Weissman/Synaptic">Source Code</a>
                <br />
           </div>)
}

export default Pixi