import CurrencyFormat from 'react-currency-format';
import styles from '../styles/Subtotal.module.css';
import {
  getBasketTotal,
} from '../context/reducer';
import {
  useStateValue,
} from '../context/StateProvider';

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className={styles.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong>
                {value}
              </strong>
            </p>
            <small className={styles.subtotal_gift}>
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={" $"}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal;