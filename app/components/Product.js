import React from 'react';
import { useStateValue } from '../context/StateProvider';

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    console.log('add to basket')
    //   //dispatch the item to the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  };

  return (
    <div className="">
      <div className="">
        <p>{title}</p>

        <p className="">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="">
          {Array(rating).fill().map((_, i) => (
            <p key={i}>*</p>
          ))}
        </div>
      </div>
      <img className=""
        src={image} alt="" />
      <button onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;