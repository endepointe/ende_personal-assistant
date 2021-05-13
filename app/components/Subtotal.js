import CurrencyFormat from 'react-currency-format';
import {
  getBasketTotal,
} from '../context/reducer';
import {
  useStateValue,
} from '../context/StateProvider';

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong>
                {value}
              </strong>
            </p>
            <small>
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