import { type FunctionComponent } from 'react';
import { type FilesType } from '../../types/types';
import styles from '../../style/modal.module.scss';

interface ModalButtonProps {
  file: FilesType;
}

const ModalButton: FunctionComponent<ModalButtonProps> = ({ file }) => {
  const { name, link } = file;

  return (
    <div className={styles.fileButton}>
      <a
        href={link}
        className={styles.fileButtonLink}
        target="_blank"
        rel="noreferrer"
      >
        {name}
      </a>
    </div>
  );
};

export default ModalButton;
