import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface PostItemProps {
    post: IPost
    remove: (post: IPost) => void
    update: (post: IPost) => void
}

export const PostItem: FC<PostItemProps> = ({post, remove, update}) => {
    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(post)
    }

    const handleUpdate = (event: React.MouseEvent) => {
        const title = prompt() || ''
        update({...post, title})
    }

    return (
        <div className='Post' onClick={handleUpdate}>
            <div className="Post_content">
                {post.id}. {post.title} {post.body}
            </div>
            <button onClick={handleRemove}>Delete</button>
        </div>
    );
};
