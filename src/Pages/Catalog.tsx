import { FunctionComponent, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { loadProducts, selectProductsLoadStatus } from '../redux/slices/products';
import { AppDispatch } from '../redux/store';

import ProductsList from '../components/ProductsList/ProductsList';
import Loader from '../components/Loader/Loader';
import Main from '../components/Main/Main';
import Error from '../components/Error/Error';

const Catalog: FunctionComponent = () => {
  const dispatch = useDispatch<AppDispatch>();

  const status = useSelector(selectProductsLoadStatus);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch])

  return (
    <Main>
      {
        status === "loaded" && <ProductsList />
      }
      {
        status === "loading" && <Loader />
      }
      {
        status === "error" && <Error />
      }
    </Main>
  );
}

export default Catalog;
