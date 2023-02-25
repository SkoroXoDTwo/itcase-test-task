import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import './Error.scss';

const Error: FunctionComponent = () => {
  return (
    <div className="error">
      <h2 className='error__title'>Error</h2>
    </div>
  );
}

export default Error;
