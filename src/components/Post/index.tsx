interface PostProps {
    author: string;
    avatarSrc: string;
    authorTitle: string;
    postContent: string;
}

import { Avatar } from '../Avatar';
import { Comment, CommentProps } from '../Comment';
import styles from './Post.module.scss';

const comments = [{
    author: 'Diego Souza',
    comment: 'Muito bom Devon, parabéns!! 👏👏',
    commentLikes: 22,
    likedButton: false,
    time: "Cerca de 2h",
    timeTitle: "24 de Outubro de 2023",
    timeDate: "2023-10-24 19:00:00",
    authorSrc: 'http://github.com/diego3g.png'

},

{
    author: 'Wesley Trindade Guarnieri',
    comment: 'Muito bom Devon, parabéns!! 👏👏',
    commentLikes: 22,
    likedButton: false,
    time: "Cerca de 2h",
    timeTitle: "24 de Outubro de 2023",
    timeDate: "2023-10-24 19:00:00",
    authorSrc: 'http://github.com/wesleytrindade.png'

},

{
    author: 'Wesley Trindade Guarnieri',
    comment: 'Muito bom Devon, parabéns!! 👏👏',
    commentLikes: 22,
    likedButton: false,
    time: "Cerca de 2h",
    timeTitle: "24 de Outubro de 2023",
    timeDate: "2023-10-24 19:00:00"

},

] as CommentProps[];


export function Post({ author, avatarSrc, authorTitle, postContent }: PostProps) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.post__author}>
                    <Avatar imgSrc={avatarSrc} withBorder={true} />
                    <div className={styles.post__author__info}>
                        <strong>{author}</strong>
                        <span>{authorTitle}</span>
                    </div>
                </div>

                <time dateTime="2023-10-23 23:45:00"> Publicado há 1h</time>
            </header>

            <div className={styles.post__content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href='#'>👉{' '}jane.design/doctorcare</a></p>
                <p>
                    <a href='#'>#novoprojeto </a>{' '}
                    <a href='#'>#nlw</a>{' '}
                    <a href='#'>#rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário" />
                <footer className={styles.commentForm__footer}>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>

                {comments.map((comment, key) => {
                    return (
                        <Comment
                            key={key}
                            author={comment.author}
                            comment={comment.comment}
                            time={comment.time}
                            timeTitle={comment.timeTitle}
                            timeDate={comment.timeDate}
                            commentLikes={comment.commentLikes}
                            likedButton={comment.likedButton}
                            authorSrc={comment.authorSrc}
                        />
                    )
                })}
            </div>
        </article >

    );
}