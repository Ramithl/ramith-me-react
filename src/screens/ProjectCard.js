import React from 'react';




function ProjectCard(props){
    return (

        <div class="card mt-3">
            <div class="card-body">
                <div className="blog-card">
                    <h1>{props.name}</h1>
                </div>
            </div>
            
        </div>
        
    );
}

export default ProjectCard;