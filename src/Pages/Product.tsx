import { FunctionComponent, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { selectProductLoadStatus } from '../redux/slices/product';
import { AppDispatch } from '../redux/store';
import { loadSizes } from '../redux/slices/sizes';
import { loadProduct } from '../redux/slices/product';

import Details from '../components/Details/Details';
import Loader from '../components/Loader/Loader';
import Main from '../components/Main/Main';
import Error from '../components/Error/Error';

const Product: FunctionComponent = () => {
  const { id } = useParams();

  const status = useSelector(selectProductLoadStatus);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadSizes());
    dispatch(loadProduct(Number(id)));
  }, [dispatch])

  return (
    <Main>
      {
        status === "loaded" && <Details />
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

export default Product;
