import { FunctionComponent, PropsWithChildren } from 'react';
import './ProductsList.scss';

const ProductsList: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <section className="products">
      <h2 className='products__title'>Catalog</h2>
      <ul className='products__list'>
        {children}
      </ul>
    </section>
  );
}

export default ProductsList;
