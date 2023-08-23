import { FunctionComponent } from 'react';

import styles from '../style/menu.module.scss';
import stylesBtn from '../style/ui/buttons.module.scss';

import { menu } from '../data/menu';

import Button from './ui/Button';

const Menu: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      {
        menu.map((item, index) => <Button btnText={item} key={index} className={stylesBtn.menuBtn} />)
      }
    </div>
  );
};

export default Menu;
