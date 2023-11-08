import { type FunctionComponent } from 'react';
import { type SubThemesType } from '../../types/types';
import styles from '../../style/modal.module.scss';

interface ModalMenuProps {
  subThemes: SubThemesType[];
  menuItemHandler: (id: string) => void;
}

const ModalMenu: FunctionComponent<ModalMenuProps> = (props) => {
  const { subThemes, menuItemHandler } = props;

  return (
    <div className={styles.modalMenu}>
      {subThemes.map((subTheme) => (
        <p
          key={subTheme._id}
          onClick={() => {
            menuItemHandler(subTheme._id);
          }}
          className={styles.modalMenuItem}
        >
          {subTheme.name}
        </p>
      ))}
    </div>
  );
};

export default ModalMenu;
