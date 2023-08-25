import { FunctionComponent, useState } from 'react';

import styles from '../style/menu.module.scss';

import ModalWindow from './ui/ModalWindow';

import { colors } from '../data/colors';

type MenuItemProps = {
  id: string;
  text: string;
  colorIndex: number;
}

const MenuItem: FunctionComponent<MenuItemProps> = ( {id, text, colorIndex} ) => {
  const [isModalShown, setIsModalShown] = useState(false);

  function modalWindowToggler() {
    setIsModalShown(prevModalState => !prevModalState);
  }

  return (
    <>
      {
        isModalShown && 
          <ModalWindow 
            id={id} 
            title={text} 
            togglerFunction={modalWindowToggler}
          />
      }
      <div 
        style={{backgroundColor: colors[colorIndex]}}
        className={styles.menuItem}
        onClick={modalWindowToggler}
      >
        {text}
      </div>
    </>
  );
};

export default MenuItem;
