import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

export default function CartItem({
  name,
  quantity,
  price,
  onIncrease,
  onDecrease,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <Button onClick={onDecrease}>-</Button>
        <span>{quantity}</span>
        <Button onClick={onIncrease}>+</Button>
      </p>
    </li>
  );
}
