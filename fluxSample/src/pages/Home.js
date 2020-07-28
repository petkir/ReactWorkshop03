import React from "react";
import postStore from "../stores/postStore";

function Home() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Welcome to the BlogApp</h1>
            <p className="lead">This is a Home page of BlogApp.</p>
            <button onClick={()=> {postStore.addPost({
            "title": "Hello from Home",
            "author": "John Doe",
            "body": "Testing another component"
        }) }}>AddPost</button>
        </div>
    );
}

export default Home;
