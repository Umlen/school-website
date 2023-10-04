import { FunctionComponent, useEffect, useState } from 'react';

import styles from '../../style/ui/modal.module.scss';

import closeBtn from '../../assets/close-btn.png';

import { FilesType, ThemeType } from '../../types/types';

type ModalWindowProps = {
  theme: ThemeType;
  togglerFunction: () => void;
};

const ModalWindow: FunctionComponent<ModalWindowProps> = ( {theme, togglerFunction} ) => {
  const [themeFiles, setThemeFiles] = useState<FilesType[]>([]);
  const isSubThemes = theme.hasOwnProperty('subThemes');

  useEffect(() => {
    if (theme.subThemes) {
        setThemeFiles(theme.subThemes[0].files);
    } else if (theme.files) {
        setThemeFiles(theme.files);
    }
  }, []);

  return (
    <div className={styles.blackout}>
      <div className={styles.modalWindow}>
        <img 
          src={closeBtn} 
          alt='' 
          className={styles.closeBtn} 
          onClick={togglerFunction}
        />
        {
          isSubThemes 
            ? theme.subThemes?.map(subTheme => <p>{subTheme.name}</p>) 
            : <h3 className='mediumHeader marginBottom1rem'>
                {theme.name}
              </h3>
        }
        <div className={styles.filesWrapper}>
          {
            themeFiles.map(file => <p>{file.name}</p>) 
          }
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
