import { FunctionComponent } from 'react';

import styles from '../../style/ui/modal.module.scss';

/*interface for require.context*/

declare interface NodeRequire {
  context: (dir: string, includeSubdirs: boolean, filter: RegExp) => any;
}
declare var require: NodeRequire;

type FileButtonProps = {
  btnText: string;
  id: string;
};

const FileButton: FunctionComponent<FileButtonProps> = ( {btnText, id} ) => {
  function importAllBtnImages(r: any) {
    let images: any = {};
    r.keys().map((item: any) => images[item.replace('./', '')] = r(item));
    return images;
  }

  const images = importAllBtnImages(require.context('../../assets/fileBtn', false, /\.png/));

  return (
    <div 
      style={{backgroundImage: `url(${images[`f-${id}.png`]})`}}
      className={styles.fileBtn}
    >
      <p className={styles.fileBtnText}>
        {btnText}
      </p>
    </div>
  );
};

export default FileButton;
