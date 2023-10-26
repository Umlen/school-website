import { type FunctionComponent, useState } from 'react';
import { type ThemeType } from '../types/types';
import { colors } from '../data/colors';
import ModalWindow from './modal/ModalWindow';
import styles from '../style/menu.module.scss';

interface MenuItemProps {
  theme: ThemeType;
  colorIndex: number;
}

const MenuItem: FunctionComponent<MenuItemProps> = ({ theme, colorIndex }) => {
  const [isModalShown, setIsModalShown] = useState(false);

  function modalWindowToggler(): void {
    setIsModalShown((prevModalState) => !prevModalState);
  }

  return (
    <>
      {isModalShown && (
        <ModalWindow theme={theme} togglerFunction={modalWindowToggler} />
      )}
      <div
        style={{ backgroundColor: colors[colorIndex] }}
        className={styles.menuItem}
        onClick={modalWindowToggler}
      >
        {theme.name}
      </div>
    </>
  );
};

export default MenuItem;
