import { FunctionComponent } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Header from '../Header/Header';
import Catalog from '../../pages/Catalog';
import Product from '../../pages/Product';
import './App.scss';

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path='/' element={<Catalog />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
