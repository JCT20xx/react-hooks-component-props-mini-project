import React from "react";
import Article from "./Article";

function ArticleList({ posts }){
        return(
            <main>
                <Article id={posts[0].id} title={posts[0].title} date={posts[0].date} preview={posts[0].preview} minutes={posts[0].minutes}/>
                <Article id={posts[1].id} title={posts[1].title} date={posts[1].date} preview={posts[1].preview} minutes={posts[1].minutes}/>
                <Article id={posts[2].id} title={posts[2].title} preview={posts[2].preview} minutes={posts[2].minutes}/>
            </main>
        )
    }

export default ArticleList;