import { FunctionComponent, PropsWithChildren, useEffect } from 'react';
import { AppDispatch } from '../../redux/store';
import { useSelector, useDispatch } from "react-redux";
import { loadSizes } from '../../redux/slices/sizes';
import { loadProducts } from '../../redux/slices/products';
import './ProductsList.scss';

const ProductsList: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch])

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
