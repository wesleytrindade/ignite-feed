import style from './Header.module.scss';

import igniteLogo from '../../assets/ignite-logo.svg';

export function Header(){
    return(
      <div className={style.header}>
        <img src={igniteLogo} alt='Ignite Logo'/>
      </div>
    );
}