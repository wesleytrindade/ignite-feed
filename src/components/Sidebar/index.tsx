import { PencilLine } from '@phosphor-icons/react';
import styles from './Sidebar.module.scss';
import { Avatar } from '../Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebar__cover} />

            <div className={styles.sidebar__profile}>

                <Avatar withBorder={false} />
                <strong>Wesley Trindade Guarnieri</strong>
                <span>Web developer</span>
            </div>

            <footer>

                <a href='#'>
                    <PencilLine size={20} color="green" weight='fill' />
                    Editar seu perfil</a>
            </footer>
        </aside>
    )
}