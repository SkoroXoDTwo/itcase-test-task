import { FunctionComponent } from 'react';
import './Loader.scss';

const Loader: FunctionComponent = () => {
  return (
    <section className="loader">
      <div className='loader__gif' />
    </section>
  );
}

export default Loader;
