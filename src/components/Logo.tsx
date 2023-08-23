import { FunctionComponent } from 'react';

import styles from '../style/logo.module.scss';

const Logo: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className='largeHeader marginBottom1em'>
          Методическое объединение
        </h1>
        <h2 className='mediumHeader'>
          МКОУ Сокурская СОШ №19
        </h2>
      </div>
    </div>
  );
};

export default Logo;
