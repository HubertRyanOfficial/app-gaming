export const UPDATE_CART = 'UPDATE_CART';
export const UPDATE_CART_LOADED = 'UPDATE_CART_LOADED';
export const RESET_CART = 'RESET_CART';

// * UPDATE CART

export function updateCart(value) {
  return {
    type: UPDATE_CART,
    payload: value,
  };
}

// * UPDATE CART LOADED

export function updateCartLoaded(value) {
  return {
    type: UPDATE_CART_LOADED,
    payload: value,
  };
}

// * RESET CART

export function resetCart() {
  return {
    type: RESET_CART,
  };
}
