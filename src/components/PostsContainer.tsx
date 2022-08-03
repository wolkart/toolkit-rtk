import React from 'react';
import {postAPI} from "../services/PostService";
import {PostItem} from "./PostItem";
import {IPost} from "../models/IPost";

export const PostsContainer = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(5)
    const [createPost, {}] = postAPI.useCreatePostMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    return (
        <div className='Post__list'>
            <button onClick={handleCreate}>Add new post</button>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Произошла ошибка!</h1>}
            {posts && posts.map(post => <PostItem key={post.id} post={post}/>)}
        </div>
    );
};
