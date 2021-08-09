import React, { useEffect, useState } from 'react';
import './Projects.css';
import './ProjectCard';

function Projects(){

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://api.dribbble.com/v2/user/shots?access_token=cd444394ba6c81b38d2bf939af40bc49a8a5e85f3d32f5f574892719d1655ca2")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
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
                <div class="row mx-2">
                    {items.map(item => (
                        <div className="col-md-4 pt-3">
                            
                            <img class="rounded mx-auto d-block" alt="design" src={item.images.normal} />
                            <h1 class="mt-3">{item.title}</h1>
                            <p class="mx-2">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;