import { FunctionComponent } from 'react';

import styles from '../../style/modal.module.scss';

import { SubThemesType } from '../../types/types';

type ModalMenuProps = {
  subThemes: SubThemesType[];
  menuItemHandler: (id: string) => void;
};

const ModalMenu: FunctionComponent<ModalMenuProps> = ( {subThemes, menuItemHandler} ) => {
  return (
    <div className={styles.modalMenu}>
      {
        subThemes.map(subTheme => 
          <p 
            key={subTheme.id}
            onClick={() => menuItemHandler(subTheme.id)}
            className={styles.modalMenuItem}
          >
            {subTheme.name}
          </p>
        ) 
      }
    </div>
  );
};

export default ModalMenu;
