import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import * as loading from '../img/9419-loading-circles.json';

import './Projects.css';
import './ProjectCard';

function Projects(){

    const [items, setItems] = useState([]);
    const [done,setDone]=useState(undefined);

    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: loading.default,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

    useEffect(() => {
        fetch("https://api.dribbble.com/v2/user/shots?access_token=cd444394ba6c81b38d2bf939af40bc49a8a5e85f3d32f5f574892719d1655ca2")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                    setTimeout(() => 1000);
                    setDone(true);
                },
            )
    }, [])


    return (
        <div className="projects-div">
            <div class="container">
                <div class="heading">
                    <h1>Projects</h1>
                    <p>Recents projects I've been working on.</p>
                </div>
                <>
                    {!done ? (
                        <div className="loading-screen">
                                <Lottie options={defaultOptions1} height={250} width={250}  />
                        </div>
                        
                    ) : (
                        <div class="row mx-2">
                    {items.map(item => (
                        <div className="col-md-4 pt-3">
                            
                            <img class="rounded mx-auto d-block" alt="design" src={item.images.normal} />
                            <h1 class="mt-3">{item.title}</h1>
                            <p class="mx-2">{item.description}</p>
                        </div>
                    ))}
                </div>
                    )}
                </>
                
                
            </div>
        </div>
    );
}

export default Projects;