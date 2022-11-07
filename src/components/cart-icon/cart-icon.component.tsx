import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";
import { selectCartCount, setIsCartOpen } from "../../store/cart/cart.slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";

const CartIcon = () => {
  const dispatch = useAppDispatch();
  const setIsCartOpenHandler = () => dispatch(setIsCartOpen(!isCartOpen));
  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const cartCount = useAppSelector(selectCartCount);

  const cartToggler = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={cartToggler}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

// onclick from
