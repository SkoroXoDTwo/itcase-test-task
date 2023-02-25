import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header: FunctionComponent = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1 className='header__logo'>t-shirt store</h1>
      </Link>
    </div>
  );
}

export default Header;
