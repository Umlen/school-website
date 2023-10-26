import { useEffect, useState, type FunctionComponent } from 'react';
import { type FilesType, type ThemeType } from '../../types/types';
import ModalButton from './ModalButton';
import ModalMenu from './ModalMenu';
import closeBtn from '../../assets/close-btn.png';
import styles from '../../style/modal.module.scss';

interface ModalWindowProps {
  theme: ThemeType;
  togglerFunction: () => void;
}

const ModalWindow: FunctionComponent<ModalWindowProps> = ({
  theme,
  togglerFunction,
}) => {
  const [themeFiles, setThemeFiles] = useState<FilesType[]>([]);

  useEffect(() => {
    if (theme.subThemes != null) {
      setThemeFiles(theme.subThemes[0].files);
    } else if (theme.files != null) {
      setThemeFiles(theme.files);
    }
  }, [theme.subThemes, theme.files]);

  function subThemeHandler(id: string): void {
    if (theme.subThemes != null) {
      const subTheme = theme.subThemes.filter((theme) => theme.id === id)[0];
      setThemeFiles(subTheme.files);
    }
  }

  return (
    <div className={styles.blackout}>
      <div className={styles.modalWindow}>
        <img
          src={closeBtn}
          alt=""
          className={styles.closeBtn}
          onClick={togglerFunction}
        />
        {theme.subThemes != null ? (
          <ModalMenu
            subThemes={theme.subThemes}
            menuItemHandler={subThemeHandler}
          />
        ) : (
          <h3 className="mediumHeader marginBottom2rem">{theme.name}</h3>
        )}
        <div className={styles.filesWrapper}>
          {themeFiles.map((file) => (
            <ModalButton key={file.id} file={file} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
