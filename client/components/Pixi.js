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
                <a href="https://max-weissman.github.io/Stackathon/" className="try">Try it out!</a>
           </div>)
}

export default Pixi