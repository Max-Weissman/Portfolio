import React from 'react';
import Iframe from 'react-iframe'

const Pixi = () => {
    return(<div>
                <h2>Color Gradient and Pixelate Maze</h2>
                <div className="paragraph">Two apps using the neural networking tool, Synaptic, for machine learning.
                The Color Gradient app takes in a wavelength of color and outputs a RGB value based off its training with a small set of data. 
                The Pixelate Maze app allows you to draw mazes that can be checked for solvability either through an algorithm or using the trained
                neural network.</div>
                <br />
                <div>Technologies: Synaptic, React</div>
                <div>Language: Javascript</div>
                <br />
                <Iframe url="https://www.youtube.com/embed/tcuVHvCbkDA"
                    width="450px"
                    height="450px"
                    display="initial"
                    position="relative"/>
           </div>)
}

export default Pixi