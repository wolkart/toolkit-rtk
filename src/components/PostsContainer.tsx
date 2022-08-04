import React from 'react';
import {postAPI} from "../services/PostService";
import {PostItem} from "./PostItem";
import {IPost} from "../models/IPost";

export const PostsContainer = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(50)
    const [createPost, {error: createError, isLoading: createIsLoading}] = postAPI.useCreatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div className='Post__list'>
            <button onClick={handleCreate} style={{marginBottom: "20px"}}>Add new post</button>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Произошла ошибка!</h1>}
            {posts && posts.map(post =>
                <PostItem
                    key={post.id}
                    remove={handleRemove}
                    update={handleUpdate}
                    post={post}/>)}
        </div>
    );
};
