import React from 'react';
import {postAPI} from "../services/PostService";
import {PostItem} from "./PostItem";

export const PostsContainer = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(5)
    return (
        <div className='Post__list'>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Произошла ошибка!</h1>}
            {posts && posts.map(post => <PostItem key={post.id} post={post}/>)}
        </div>
    );
};
