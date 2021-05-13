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
      <div>
        <div>
          <img
            src="https://via.placeholder.com/600x50" alt="" />

          <div>
            <h2>
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

        <div>
          <Subtotal />
        </div>
      </div>
    </Layout>
  );
}

export default Checkout;