import { useContext } from "react";
import { Modal } from "./UI/Modal";
import Button from "./UI/Button";
import { currencyFormatter } from "../util/formatting";
import CartContext from "../store/CartContext";
import { UserProgressContext } from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const UserProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  function handlerClosCart() {
    UserProgressCtx.hideCart();
  }

  return (
    <Modal
      className="cart"
      open={UserProgressCtx.progress === "cart"}
      onClose={handlerClosCart}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalCartItems)}</p>

      <div className="modal-actions">
        <Button className="text-button" onClick={UserProgressCtx.hideCart}>
          Close
        </Button>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button className="button-danger" onClick={cartCtx.clearCart}>
            Clear Cart
          </Button>
          {cartCtx.items.length > 0 && (
            <Button className="button" onClick={UserProgressCtx.showCheckout}>
              Go to Checkout
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
}
