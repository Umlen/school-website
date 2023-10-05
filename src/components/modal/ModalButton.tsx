import { FunctionComponent } from 'react';

import styles from '../../style/modal.module.scss';

import { FilesType } from '../../types/types';

type ModalButtonProps = {
  file: FilesType;
};

const ModalButton: FunctionComponent<ModalButtonProps> = ( {file} ) => {
  const {name, link} = file;

  return (
    <div className={styles.fileButton}>
      <a 
        href={link} 
        className={styles.fileButtonLink}
        target='_blank'
        rel='noreferrer'
      >
        {name}
      </a>
    </div>
  );
};

export default ModalButton;
