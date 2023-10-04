import { FunctionComponent } from 'react';

import styles from '../../style/ui/modal.module.scss';

import { FilesType } from '../../types/types';

type FileButtonProps = {
  file: FilesType;
};

const FileButton: FunctionComponent<FileButtonProps> = ( {file} ) => {
  const {name, link} = file;

  return (
    <a 
      href={link} 
      className={styles.fileBtnText}
      target='_blank'
      rel='noreferrer'
    >
      {name}
    </a>
  );
};

export default FileButton;
