import React from 'react';
import './BlogCard.css';
import Button from '@material-ui/core/Button';



function BlogCard(props){
    return (

        <div class="card mt-3">
            <div class="card-body">
                <div className="blog-card">
                    <h1>{props.title}</h1>
                    <h2>{props.date}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
            <div class="card-footer">
                <Button variant="contained" href={props.url} color="primary">
                    Read More
                </Button>
            </div>
        </div>
        
    );
}

export default BlogCard;