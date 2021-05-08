
export const initialState = {
  basket: [],
  user: null,
  count: 0,
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
}

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);

      } else {
        console.warn(`cant remove ${action.id}`)
      }
      return {
        ...state,
        basket: newBasket,
      }
    case 'SET_USER':
      console.log("action: ", action)
      return {
        ...state,
        user: action.user
      }
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

export default reducer;