import { FunctionComponent } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Catalog from '../../Pages/Catalog';
import './App.scss';

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <Header />

      <Main>
        <Routes>
          <Route path='/' element={<Catalog />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
