// cartReducer.js
const initialState = {
    items: [],
  };
  
  export const updateItemQuantity = (id, quantity) => {
    return {
      type: 'UPDATE_ITEM_QUANTITY',
      payload: { id, quantity },
    };
  };
  
  export const removeItem = (id) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: { id },
    };
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingItem = state.items.find(item => item.id === action.payload.id);
        if (existingItem) {
          return {
            ...state,
            items: state.items.map(item =>
              item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
        } else {
          return {
            ...state,
            items: [...state.items, { ...action.payload, quantity: 1 }],
          };
        }
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id),
        };
      case 'UPDATE_ITEM_QUANTITY':
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
          ),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  