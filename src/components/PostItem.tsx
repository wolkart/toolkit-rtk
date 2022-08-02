import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface PostItemProps {
    post: IPost
}

export const PostItem: FC<PostItemProps> = ({post}) => {
    return (
        <div className='post'>
            {post.id}. {post.title}
            <button>Delete</button>
        </div>
    );
};