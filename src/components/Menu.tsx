import { FunctionComponent } from 'react';

import styles from '../style/menu.module.scss';

import { menu } from '../data/menu';

import MenuItem from './MenuItem';

const Menu: FunctionComponent = () => {
  return (
    <div className={styles.menu}>
      {
        menu.map(menuItem => (
            <MenuItem 
              key={menuItem.id} 
              text={menuItem.name} 
              id={menuItem.id} 
            />
          )
        )
      }
    </div>
  );
};

export default Menu;
