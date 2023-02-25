import { FunctionComponent, PropsWithChildren, useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectProductLoadStatus } from '../redux/slices/product';
import { AppDispatch } from '../redux/store';
import Details from '../components/Details/Details';
import { loadSizes } from '../redux/slices/sizes';
import { loadProduct } from '../redux/slices/product';
import { useParams } from "react-router-dom";
import Loader from '../components/Loader/Loader';

const Product: FunctionComponent = () => {
  const { id } = useParams();

  const status = useSelector(selectProductLoadStatus);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadSizes());
    dispatch(loadProduct(Number(id)));
  }, [dispatch])

  return (
    <>
      {
        status === "loaded" && <Details />
      }
      {
        status === "loading" && <Loader />
      }
    </>
  );
}

export default Product;
