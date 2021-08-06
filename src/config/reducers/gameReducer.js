import Image from '../../../assets/img-4.png';
import Image1 from '../../../assets/img-2.png';
import Image2 from '../../../assets/img-5.png';
import Image3 from '../../../assets/img-1.png';
import Image4 from '../../../assets/img-3.png';
import Image5 from '../../../assets/img-6.png';

import {RESET_CART, UPDATE_CART, UPDATE_CART_LOADED} from '../actions';

let INITIAL_STATE = {
  allGames: [
    {
      id: 1,
      image: Image,
      title: 'The Legend of Zelda: Link’s Awakening',
      platform: 'Nintendo Switch',
      tags: ['Ação', 'Aventura'],
      price: 299,
      free: false,
    },
    {
      id: 2,
      image: Image1,
      title: 'Animal Crossing: New Horizons',
      platform: 'Nintendo Switch',
      tags: ['Simulação'],
      price: 350,
      free: false,
    },
    {
      id: 3,
      image: Image2,
      title: 'Celeste',
      platform: 'PC',
      tags: ['Ação', 'Aventura', 'Indie'],
      price: 36.99,
      free: false,
    },
    {
      id: 4,
      image: Image3,
      title: 'Hades',
      platform: 'PC / Nintendo Switch',
      tags: ['Ação', 'RPG', 'Indie'],
      price: 47.49,
      free: false,
    },
    {
      id: 5,
      image: Image4,
      title: 'Knockout City™',
      platform: 'PC / Nintendo Switch',
      tags: ['Ação', 'Aventura', 'Esportes'],
      price: 99,
      free: false,
    },
    {
      id: 6,
      image: Image5,
      title: 'Dota 2',
      platform: 'PC',
      tags: ['Ação', 'Estratégia'],
      price: null,
      free: true,
    },
  ],
  cart: {
    loaded: false,
    totalItems: 0,
    totalPrice: 0,
    totalTruck: 0,
    cep: null,
    items: [
      // {
      //   id: 1,
      //   image: Image,
      //   title: 'The Legend of Zelda: Link’s Awakening',
      //   price: 100,
      //   free: false,
      //   total: 4,
      // },
      // {
      //   id: 2,
      //   image: Image1,
      //   title: 'Animal Crossing: New Horizons',
      //   price: 350,
      //   free: false,
      //   total: 7,
      // },
      // {
      //   id: 3,
      //   image: Image2,
      //   title: 'Celeste',
      //   price: 36.99,
      //   free: false,
      //   total: 3,
      // },
    ],
  },
};

export default function gameReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          ...action.payload,
        },
      };
    case UPDATE_CART_LOADED:
      return {
        ...state,
        cart: {
          ...state.cart,
          loaded: action.payload,
        },
      };
    case RESET_CART:
      return {
        ...state,
        cart: {
          loaded: false,
          totalItems: 0,
          totalPrice: 0,
          totalTruck: 0,
          cep: null,
          items: [],
        },
      };
    default:
      return state;
  }
}
