import React from 'react';
import Iframe from 'react-iframe'

const Haven = ({history}) => {
    history.replace('/')
    return(<div>
                <h2>Haven</h2>
                <div className="paragraph">Haven is a unique utility app designed to serve the communities of those in need. 
                The aim of the app is to lend a hand to those who may not have any other avenue for support. 
                The app is supported by special helper users who are able to offer special services or create events for people to take advantage of. 
                Haven allows users to share and access information about their local area with a variety of different tools making sure that no user 
                feels the need to step too far out of their comfort zone to get the support they need.</div>
                <br />
                <div>Technologies: React Native, Firebase, Expo</div>
                <div>Language: Javascript</div>
                <br />
                <Iframe url="https://www.youtube.com/embed/9gIEI9mhQ1Y"
                    width="450px"
                    height="450px"
                    display="initial"
                    position="relative"/>
                <br />
                <a className="code" href="https://github.com/2206-capstone-YMMV/Haven">Source Code</a>
                <br />
                <div>Check out Haven by using the Expo Go app on your phone</div>
                <img src="https://user-images.githubusercontent.com/100179946/188930768-03ee959f-4820-40be-b1e7-f0402c8ea084.png"/>
                <br />
           </div>)
}

export default Haven