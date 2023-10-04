import { FunctionComponent, useState } from 'react';

import styles from '../style/menu.module.scss';

import { colors } from '../data/colors';

import { ThemeType } from '../types/types';

import ModalWindow from './ui/ModalWindow';

type MenuItemProps = {
  theme: ThemeType;
  colorIndex: number;
}

const MenuItem: FunctionComponent<MenuItemProps> = ( {theme, colorIndex} ) => {
  const [isModalShown, setIsModalShown] = useState(false);

  function modalWindowToggler() {
    setIsModalShown(prevModalState => !prevModalState);
  }

  return (
    <>
      {
        isModalShown && 
          <ModalWindow 
            theme={theme}
            togglerFunction={modalWindowToggler}
          />
      }
      <div 
        style={{backgroundColor: colors[colorIndex]}}
        className={styles.menuItem}
        onClick={modalWindowToggler}
      >
        {theme.name}
      </div>
    </>
  );
};

export default MenuItem;
