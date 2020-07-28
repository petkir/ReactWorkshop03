import React, { useState, useEffect } from "react";
import PostLists from "../components/PostLists";
import postStore from "../stores/postStore";
import { getPosts,addPost } from "../actions/postActions";

function PostPage() {
    const [posts, setPosts] = useState(postStore.getPosts());

    useEffect(() => {
        postStore.addChangeListener(onChange);
        if (postStore.getPosts().length === 0) getPosts();
        return () => postStore.removeChangeListener(onChange);
    }, []);

    function onChange() {
        debugger;
        const storedata=postStore.getPosts()
        
        //this does not trigger a state refresh, because same object 
        //setPosts(storedata);
        //clone array than it is a new one
        setPosts([...storedata]);
        
    }

    return (
        <div>
            <button onClick={()=> {
                //use dispatcher
              /*  addPost({
                    "title": "PostAddDispatch",
                    "author": "John Doe",
                    "body": "Testing from posts"
                })*/
               //interact with store
               postStore.addPost({
            "title": "Postaction",
            "author": "John Doe",
            "body": "Testing from posts"
        });
        
    
        }}>AddPost</button>
            <PostLists posts={posts} />
        </div>
    );
}

export default PostPage;
