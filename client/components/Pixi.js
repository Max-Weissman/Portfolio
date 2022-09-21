import React from 'react';
import Iframe from 'react-iframe'

const Pixi = () => {
    return(<div>
                <h2>Princess Pixi</h2>
                <div className="paragraph">Princess Pixi is a short 2D maze game.
                The app uses PixiJS's sprite manipulation with Javascript based algorithms.</div>
                <br />
                <div>Technologies: PixiJS</div>
                <div>Language: Javascript</div>
                <br />
                <Iframe url="https://www.youtube.com/embed/TPM-TqtfEkQ"
                    width="450px"
                    height="450px"
                    display="initial"
                    position="relative"/>
                <br />
                <a className="code" href="https://github.com/Max-Weissman/Stackathon">Source Code</a>
                <br />
                <a className="code" href="https://max-weissman.github.io/Stackathon/">Try it out!</a>
                <br />
           </div>)
}

export default Pixi