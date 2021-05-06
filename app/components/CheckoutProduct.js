import Layout from '../components/Layout';
import styles from '../styles/CheckoutProduct.module.css';
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
      <div className={styles.checkoutProduct}>
        <img
          className={styles.checkoutProduct_image}
          src={image} alt="" />

        <div className={styles.checkoutProduct_info}>
          <p className={styles.checkoutProduct_title}>
            {title}
          </p>
          <p className={styles.checkoutProduct_price}>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className={styles.checkoutProduct_rating}>
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