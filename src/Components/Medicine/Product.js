import classes from "./product.module.css";
import { ShopContext } from "../context/shop-context";
import { useContext } from "react";

const Product = (props) => {
  const { id, name, description, price } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className={classes.Product}>
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p>
          <b>{description}</b>
        </p>
        <p>
          <b>Rs.{price.toFixed(2)}</b>
        </p>
      </div>
      <div className={classes.actions}>
        <button onClick={() => addToCart(id)}>
          Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default Product;
