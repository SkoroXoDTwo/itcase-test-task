import { FunctionComponent } from 'react';
import './Header.scss';

const Header: FunctionComponent = () => {
  return (
    <div className="header">
      <h1 className='header__logo'>t-shirt store</h1>
    </div>
  );
}

export default Header;
