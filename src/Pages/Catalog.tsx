import { FunctionComponent, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from '../redux/slices/products';
import { loadProducts } from '../redux/slices/products';
import { AppDispatch } from '../redux/store';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductsList from '../components/ProductsList/ProductsList';

const Catalog: FunctionComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch])

  return (
    <>
      <ProductsList>
        {
          products && products.map(product => (
            <ProductCard key={product.id} id={product.id} name={product.name} imgLink={product.imgLink} />
          ))
        }
      </ProductsList>
    </>
  );
}

export default Catalog;
