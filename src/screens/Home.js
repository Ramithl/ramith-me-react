import React from 'react';
import './Home.css';
import Typed from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Lottie from 'react-lottie';
import * as hello from '../img/lf30_editor_npjws31j.json';


function Home(){

    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: hello.default,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

    const typedText = 
        [
            "I am a <strong>Graphic Designer</strong>.",
            "I am a <strong>Video Editor</strong>.",
            "I am a <strong>Videographer</strong>.",
            "I am a <strong>Casual Gamer</strong>.",
            "I am  <strong>Zycan</strong>.",
            "I am  <strong>Batman</strong>.",
            "I am the <strong>Chosen One</strong>.",
            "btw i like <strong>Coffee</strong>.",
        ]
    ;

    return (
        <div className="home-div">
            <div class="col-md-6 offset-md-3 align-self-center">
                <Lottie options={defaultOptions1} height={250} width={250}/>
                <h1 class="hello">Hello!</h1>
                <h1>I am Ramith Laksara</h1>
                <div className='typewriter'>
                <Typed
                    strings={typedText}
                    typeSpeed={60}
                    backSpeed={50}
                    loop
                    smartBackspace
                />
                </div>
                <FontAwesomeIcon icon={['fab', 'apple']} />
                
            </div>
        </div>
    );
}

export default Home;