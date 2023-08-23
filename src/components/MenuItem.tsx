import { FunctionComponent, useState } from 'react';

import styles from '../style/menu.module.scss';
import ModalWindow from './ui/ModalWindow';

type MenuItemProps = {
  id: string;
  text: string;
}

const MenuItem: FunctionComponent<MenuItemProps> = ( {id, text} ) => {
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
        className={styles.menuItem}
        onClick={modalWindowToggler}
      >
        {text}
      </div>
    </>
  );
};

export default MenuItem;
