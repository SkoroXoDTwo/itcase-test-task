import { FunctionComponent, PropsWithChildren, useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import './Details.scss';
import { selectSizes } from '../../redux/slices/sizes';
import { selectProduct } from '../../redux/slices/product';

const Details: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [selectedColorId, setSelectedColorId] = useState<number>(0);
  const [selectedSizerId, setSelectedSizeId] = useState<number | null>(null);
  const [primeImgId, setPrimeImgId] = useState<number>(0);

  const sizes = useSelector(selectSizes);
  const product = useSelector(selectProduct);

  const colors = product && product.colors ? product.colors : null;

  const name = product ? product.name : 'нет имени';
  const description = colors ? colors[selectedColorId].description : 'нет описания';
  const price = colors ? colors[selectedColorId].price : "нет цены";

  const imgs = colors && colors[selectedColorId].images;
  const imgPrimeLink = imgs && imgs[primeImgId]
    ? imgs[primeImgId]
    : '';
  const imgsOtherLinks = imgs && imgs[0]
    ? imgs.filter((_, id) => id !== primeImgId)
    : [];

  const changePrimeImgId = (link: string) => {
    if (imgs?.indexOf(link) !== undefined)
      setPrimeImgId(imgs?.indexOf(link));
  }

  const checkSizeBtnIsActive = (id: number) => {
    return colors && selectedColorId ? colors[selectedColorId - 1].sizes.includes(id) : false;
  }

  useEffect(() => {
    setSelectedSizeId(null);
  }, [selectedColorId])

  return (
    <section className="details">
      <div className='details__imgs'>
        <img className='details__prime-img' src={imgPrimeLink} />
        <div className='details__others-imgs'>
          {imgsOtherLinks.map((link: string, id) => (
            <img key={link} className='details__other-img' src={link} onClick={() => changePrimeImgId(link)} />
          ))}
        </div>
      </div>

      <div className='details__info'>
        <h2 className='details__title'>{name}</h2>
        <p className='details__description'>
          Описание: {description}
        </p>
        <p className='details__price'>Цена: {price} руб.</p>
        <div className='details__sizes'>
          {sizes?.map(size => (
            <button
              key={size.id}
              className={`details__size-btn ${checkSizeBtnIsActive(size.id)
                ? "details__size-btn_active"
                : ''
                } ${selectedSizerId === size.id ? "details__size-btn_selected" : ''}`}
              onClick={() => setSelectedSizeId(size.id)}
              disabled={!checkSizeBtnIsActive(size.id)}
            >
              {size.label}
            </button>
          )
          )}
        </div>
        <div className='details__colors'>
          {colors?.map(color => (
            <button
              key={color.id}
              className={`details__color-btn ${selectedColorId === color.id - 1 ? "details__color-btn_selected" : ''}`}
              onClick={() => setSelectedColorId(color.id - 1)}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>
    </section>

  );
}

export default Details;
