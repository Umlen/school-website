import { FunctionComponent } from 'react';

import styles from '../../style/modal.module.scss';

import { FilesType } from '../../types/types';

type ModalButtonProps = {
  file: FilesType;
};

const ModalButton: FunctionComponent<ModalButtonProps> = ( {file} ) => {
  const {name, link} = file;

  return (
    <a 
      href={link} 
      className={styles.fileButton}
      target='_blank'
      rel='noreferrer'
    >
      {name}
    </a>
  );
};

export default ModalButton;
