import { FunctionComponent } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductsList from '../components/ProductsList/ProductsList';

const Catalog: FunctionComponent = () => {
  return (
    <>
      <ProductsList>
        <ProductCard name="футбокла"/>
        <ProductCard name="футбокла"/>
        <ProductCard name="футбокла"/>

      </ProductsList>
    </>
  );
}

export default Catalog;
