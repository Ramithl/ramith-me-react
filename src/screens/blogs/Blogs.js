import React from 'react';
import './Blogs.css';
import BlogCard from './components/BlogCard';


function Blogs(){
    const [articles, setarticles] = React.useState([]);
  React.useEffect(() => {
    fetch("https://dev.to/api/articles?username=ramithl")
      .then((res) => res.json())
      .then((res) => {
        setarticles(res);
      });
    
  }, []);

  console.log(articles);
  return (
      <div className="Blogs">
          <h1>Blogs</h1>
          <div class="col-sm-6 offset-md-3 p-4 align-self-center">
              {articles.map((article) => {
                  return (
                      <BlogCard title={article.title} description={article.description} date={article.readable_publish_date} url={article.url} />
                  );
              })}
          </div>
      </div>
  );
    }
export default Blogs;