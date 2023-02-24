import { FunctionComponent, PropsWithChildren } from 'react';
import './ProductCard.scss';

type Props = {
  name: string;
  imgLink: string;
}

const ProductCard: FunctionComponent<Props> = ({ name, imgLink }) => {
  return (
    <li>
      <article className='product-card'>
        <img className='product-card__img' src={imgLink} alt={name}/>
        <div className='product-card__cover'>
          <h3 className='product-card__name'>{name}</h3>
        </div>
      </article>
    </li>
  );
}

export default ProductCard;
