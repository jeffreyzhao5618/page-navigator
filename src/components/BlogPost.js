import React from "react";
import posts from "../database/blogPosts.json";
import PageNav from "./PageNav";

function BlogPost(props) {
  let page = props.match.params.page ? Number(props.match.params.page) : 1;
  return (
    <React.Fragment>
      <div className="card my-5">
        <div className="card-body">
          <h5 className="card-title">{posts[page - 1].title}</h5>
          <p className="card-text">{posts[page - 1].content}</p>
        </div>
      </div>
      <PageNav page={page} numPages={posts.length} />
    </React.Fragment>
  );
}

export default BlogPost;
