import { FunctionComponent, PropsWithChildren } from 'react';
import './Main.scss';

const Main: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <main className="main">
      {children}
    </main>
  );
}

export default Main;
