interface PostProps {
    author: string;
    avatarSrc: string;
    authorTitle:string;
}

import styles from './Post.module.scss';

export function Post({ author, avatarSrc, authorTitle}: PostProps) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.post__author}>
                    <img className={styles.post__author__avatar} src={avatarSrc} alt={author} />
                    <div className={styles.post__author__info}>
                        <strong>{author}</strong>
                        <span>{authorTitle}</span>
                    </div>
                </div>

                <time dateTime="2023-10-23 23:45:00"> Publicado há 1h</time>
            </header>
        </article>

    );
}