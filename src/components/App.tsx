import { type FunctionComponent } from 'react';
import Logo from './Logo';
import Menu from './Menu';

const App: FunctionComponent = () => {
  return (
    <main className="mainContainer">
      <Logo />
      <Menu />
    </main>
  );
};

export default App;
