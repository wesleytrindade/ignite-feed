import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.scss';
import { useState } from 'react';
import { Avatar } from '../Avatar';

export interface CommentProps {
    author: string;
    comment: string;
    time: string;
    timeTitle:string;
    timeDate:string;
    commentLikes:number;
    likedButton:boolean;
    authorSrc:string;

}

export function Comment({author,comment,time,timeTitle,timeDate,commentLikes,likedButton = false, authorSrc}:CommentProps) {

    const [likedComment,setLikedComment] = useState(likedButton);

    return (
        <div className={styles.comment}>
            <Avatar imgSrc={authorSrc}/>
            <div className={styles.comment__box}>
                <div className={styles.comment__box__content}>
                    <header className={styles.comment__box__content__header}>
                        <div className={styles.comment__box__content__header__authorAndTime}>
                            <strong>{author}</strong>
                            <time title={timeTitle} dateTime={timeDate}>{time}</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{comment}</p>
                </div>

                <footer>
                   <button onClick={()=> {setLikedComment(!likedComment)}}>
                    <ThumbsUp weight={likedComment ? "fill" : "regular"} color="green" />
                    Aplaudir <span>{likedComment ? commentLikes + 1 : commentLikes}</span>
                   </button>
                </footer>
            </div>
        </div>
    );
}