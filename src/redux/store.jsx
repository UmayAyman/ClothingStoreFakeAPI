import { createStore } from 'redux';
const initialState = {
    products: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return { ...state, products: action.payload };
        default:
            return state;
    }
};

const store = createStore(productReducer);

export default store;


// import { createStore } from 'redux';

// // Initial state
// const initialState = {
//     products: [],
//     cart: [],
// };

// // Reducer to handle product data and cart actions
// const productReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'SET_PRODUCTS':
//             return { ...state, products: action.payload };
//         case 'ADD_TO_CART':
//             return { ...state, cart: [...state.cart, action.payload] };
//         case 'REMOVE_FROM_CART':
//             return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) };
//         default:
//             return state;
//     }
// };

// const store = createStore(productReducer);

// export default store;

