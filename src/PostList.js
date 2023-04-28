import React, { useState, useEffect } from 'react';
import { getDB } from './db';
import { handleCreateRoom } from "./Room";
function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const db = getDB();
        const collection = db.collection('posts');
        collection.find().toArray((err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            setPosts(data);
        });
    }, []);

    return (
        <div>
            {posts.map(post => (
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}

export default PostList;