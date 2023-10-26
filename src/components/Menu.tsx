import { type FunctionComponent } from 'react';
import { themes } from '../data/themes';
import MenuItem from './MenuItem';
import styles from '../style/menu.module.scss';

const Menu: FunctionComponent = () => {
  return (
    <div className={styles.menu}>
      {themes.map((theme, index) => (
        <MenuItem key={theme.id} theme={theme} colorIndex={index} />
      ))}
    </div>
  );
};

export default Menu;
