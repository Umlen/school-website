import { FunctionComponent } from 'react';

import styles from '../style/logo.module.scss';

const Logo: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className='largeHeader marginBottom1em'>
        Методическое объединение
      </h1>
      <h2 className='mediumHeader'>
        МКОУ Сокурская СОШ №19
      </h2>
    </div>
  );
};

export default Logo;
