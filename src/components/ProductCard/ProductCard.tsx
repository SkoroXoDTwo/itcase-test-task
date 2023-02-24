import { FunctionComponent, PropsWithChildren } from 'react';
import './ProductCard.scss';

type Props = {
  name: string;
}


const ProductCard: FunctionComponent<Props> = ({ name }) => {
  return (
    <li>
      <article className='product-card'>
        <img className='product-card__img' src={"/images/1/black_back.png"} />
        <div className='product-card__cover'>
          <h3 className='product-card__name'>футболка</h3>
          <p className='product-card__price'>200.00 р.</p>
        </div>
      </article>
    </li>
  );
}

export default ProductCard;
