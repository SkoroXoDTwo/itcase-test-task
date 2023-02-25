import { FunctionComponent, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

type Props = {
  id: number;
  name: string;
  imgLink: string;
}

const ProductCard: FunctionComponent<Props> = ({ id, name, imgLink }) => {
  return (
    <li>
      <Link to={`/product/${id}`}>
        <article className='product-card'>
          <img className='product-card__img' src={imgLink} alt={name} />
          <div className='product-card__cover'>
            <h3 className='product-card__name'>{name}</h3>
          </div>
        </article>
      </Link>
    </li>
  );
}

export default ProductCard;
