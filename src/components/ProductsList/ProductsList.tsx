import { FunctionComponent, PropsWithChildren } from 'react';
import { useSelector } from "react-redux";

import { selectProducts } from '../../redux/slices/products';
import './ProductsList.scss';

import ProductCard from '../ProductCard/ProductCard';

const ProductsList: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const products = useSelector(selectProducts);

  return (
    <section className="products">
      <h2 className='products__title'>Catalog</h2>
      <ul className='products__list'>
        {
          products && products.map(product => (
            <ProductCard key={product.id} id={product.id} name={product.name} imgLink={product.imgLink} />
          ))
        }
      </ul>
    </section>
  );
}

export default ProductsList;
