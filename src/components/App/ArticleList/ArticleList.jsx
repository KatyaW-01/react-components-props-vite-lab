import React from "react";
import Article from "./Article/Article"

function ArticleList({posts}) {
  return (
    <main>
      {posts.map((post)=>(
        <Article 
          id={post.id}
          title={post.title} 
          date={post.date} 
          preview={post.preview}
        />
      ))}
    </main>
  )
}

export default ArticleList