import React from 'react';
import {postAPI} from "../services/PostService";
import {PostItem} from "./PostItem";

export const PostsContainer = () => {
    const {data: posts} = postAPI.useFetchAllPostsQuery(5)
    return (
        <div>
            {posts && posts.map(post => <PostItem key={post.id} post={post}/>)}
        </div>
    );
};