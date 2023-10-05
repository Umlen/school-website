import { FunctionComponent, useEffect, useState } from 'react';

import styles from '../../style/modal.module.scss';

import closeBtn from '../../assets/close-btn.png';

import { FilesType, ThemeType } from '../../types/types';

import ModalButton from './ModalButton';

type ModalWindowProps = {
  theme: ThemeType;
  togglerFunction: () => void;
};

const ModalWindow: FunctionComponent<ModalWindowProps> = ( {theme, togglerFunction} ) => {
  const [themeFiles, setThemeFiles] = useState<FilesType[]>([]);

  useEffect(() => {
    if (theme.subThemes) {
        setThemeFiles(theme.subThemes[0].files);
    } else if (theme.files) {
        setThemeFiles(theme.files);
    }
  }, []);

  function subThemeHandler(id: string) {
    if (theme.subThemes) {
      const subTheme = theme.subThemes.find(theme => theme.id === id) || theme.subThemes[0];
      setThemeFiles(subTheme.files);
    }
  }

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
          theme.subThemes 
            ? theme.subThemes.map(subTheme => 
                <p onClick={() => subThemeHandler(subTheme.id)}>{subTheme.name}</p>
              ) 
            : <h3 className='mediumHeader marginBottom2rem'>
                {theme.name}
              </h3>
        }
        <div className={styles.filesWrapper}>
          {
            themeFiles.map(file => <ModalButton key={file.id} file={file} />) 
          }
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
