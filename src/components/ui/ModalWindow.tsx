import { FunctionComponent } from 'react';

import styles from '../../style/ui/modal.module.scss';

import closeBtn from '../../assets/close-btn.png';

import { files } from '../../data/files';

import FileButton from './FileButton';

type ModalWindowProps = {
  id: string;
  title: string;
  togglerFunction: () => void;
};

const ModalWindow: FunctionComponent<ModalWindowProps> = ( {id, title, togglerFunction} ) => {
  const themeFiles = files.filter(file => file.themeId === id);

  return (
    <div className={styles.blackout}>
      <div className={styles.modalWindow}>
        <img 
          src={closeBtn} 
          alt='' 
          className={styles.closeBtn} 
          onClick={togglerFunction}
        />
        <h3 className='mediumHeader marginBottom1rem'>
          {title}
        </h3>
        <div className={styles.filesWrapper}>
          {
            themeFiles.map((file) => (
              <FileButton key={file.id} btnText={file.name} id={file.id} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
