import { FunctionComponent } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductsList from '../components/ProductsList/ProductsList';
import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from '../redux/slices/products';

const Catalog: FunctionComponent = () => {
  const products = useSelector(selectProducts);

  return (
    <>
      <ProductsList>
        {
          products && products.map(product => (
            <ProductCard key={product.id} name={product.name} imgLink={product.imgLink}/>
          ))
        }
      </ProductsList>
    </>
  );
}

export default Catalog;
