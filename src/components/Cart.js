import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector(store => store.cart.items);
  // console.log("Cart items are ");
  // console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="w-6/12 m-auto">
      <h1 className="text-center text-2xl font-bold my-5">Cart Items</h1>
      {cartItems.length == 0 ? (
        <h1 className="text-center my-5"> Your cart is empty</h1>
      ) : (
        <div className="flex justify-end">
          <button
            className="rounded-md px-5 border border-black bg-red-600 mb-5"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      )}
      {cartItems.map((item, index) => (
        <MenuItem key={index} item={item}></MenuItem>
      ))}
    </div>
  );
};

export default Cart;
