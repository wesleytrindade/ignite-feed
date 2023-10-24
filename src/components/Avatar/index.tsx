import classNames from 'classnames';
import styles from './Avatar.module.scss';

interface AvatarProps {
    imgSrc?: string;
    withBorder?: boolean;
}
export function Avatar({ imgSrc = "http://github.com/wesleytrindade.png", withBorder = false }: AvatarProps) {
    return (
        <img
            className={
                classNames(styles.avatar, withBorder ? styles.avatar__withBorder: styles.avatar)}
                src={imgSrc} alt="" />
    )
}