export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) => {
  if (basket.length == 0) {
    return 0;
  }else{
    return basket?.reduce((ammount, item) => item.price + ammount, 0);
  };
}

// Selector
const reducer = (state, action) => {
  console.log(action);
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        let newBasket = [...state.basket]
        if (index >= 0){
          newBasket.splice(index, 1);
        }else{
          console.warn(`Can't remove product (id: ${action.id} as it is not in basket!)`)
        }
        return{
          ...state,
          basket: newBasket
        }
      case "SET_USER":
        return{
          ...state,
          user: action.user
        }
      default:
          return state;
      }
};
  
export default reducer;