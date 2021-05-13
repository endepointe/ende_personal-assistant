import Layout from '../components/Layout';
import {
  useStateValue
} from '../context/StateProvider';

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }
  return (
    <Layout>
      <div className="">
        <img
          className=""}
          src={image} alt="" />

        <div className="">
          <p className="">
            {title}
          </p>
          <p className="">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="">
            {Array(rating).fill().map((_, i) => {
              return <p>*</p>
            })}
          </div>
          <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
      </div>
    </Layout>
  )
}

export default CheckoutProduct;