import React from 'react';
import Iframe from 'react-iframe'

const Pixi = () => {
    return(<div>
                <h1>Princess Pixi</h1>
                <div>Traverse through the forest and reach the arch at the end. Watch out for the dread Cowboy!</div>
                <div>Technologies: Pixi</div>
                <Iframe url="https://www.youtube.com/embed/TPM-TqtfEkQ"
                    width="450px"
                    height="450px"
                    display="initial"
                    position="relative"/>
           </div>)
}

export default Pixi