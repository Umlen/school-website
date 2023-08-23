import { FunctionComponent } from 'react';

import styles from '../../style/ui/modal.module.scss';

import closeBtn from '../../assets/close-btn.png';

type ModalWindowProps = {
  id: string;
  title: string;
  togglerFunction: () => void;
};

const ModalWindow: FunctionComponent<ModalWindowProps> = ( {id, title, togglerFunction} ) => {
  return (
    <div className={styles.blackout}>
      <div className={styles.modalWindow}>
        <img 
          src={closeBtn} 
          alt='' 
          className={styles.closeBtn} 
          onClick={togglerFunction}
        />
        <h3 className='mediumHeader'>{title}</h3>
      </div>
    </div>
  );
};

export default ModalWindow;
