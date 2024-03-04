import { useDispatch, useSelector } from 'react-redux';
import {
  addToBasket,
  updateItem,
} from '../redux/actions/basketActions';

const Card = ({ product }) => {
  const store = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  console.log('storeee>>><', store);

  // sepete abone ol ve sepette bu elemanda varsa onu bul
  const found = store.basket.find((i) => i.id === product.id);

  const handleClick = () => {
    if (found) {
      dispatch(updateItem(found));
    } else {
      dispatch(addToBasket(product));
    }
  };

  return (
    <div className="card py-2 px-2">
      <div className="d-flex justify-content-center">
        <img
          width={180}
          height={160}
          src={product.image}
          alt={product.model}
          className="rounded"
        />
      </div>

      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>

        <p>
          <span className="fw-bold me-2">{product.make}</span>
          <span>{product.model}</span>
        </p>

        <p className="d-flex flex-column">
          {product.specs.map((spec, i) => (
            <span key={i}>{spec}</span>
          ))}
        </p>
        <h4 className="text-success">{product.price} ₺</h4>
        <button onClick={handleClick} className="w-100">
          {found ? `Miktarı Arttır (${found.amount})` : 'Sepete Ekle'}
        </button>
      </div>
    </div>
  );
};

export default Card;
