import styles from '../styles/Checkout.module.css';
import Subtotal from '../components/Subtotal';
import CheckoutProduct from '../components/CheckoutProduct';
import Layout from '../components/Layout';
import {
  useStateValue,
} from '../context/StateProvider';

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <Layout>
      <div className={styles.checkout}>
        <div className={styles.checkout_left}>
          <img
            className={styles.checkout_ad}
            src="https://via.placeholder.com/600x50" alt="" />

          <div>
            <h2 className={styles.checkout_title}>
              Your Shopping Basket
          </h2>
            {basket.map((item, i) => {
              return <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            })}
          </div>
        </div>

        <div className={styles.checkout_right}>
          <Subtotal />
        </div>
      </div>
    </Layout>
  );
}

export default Checkout;