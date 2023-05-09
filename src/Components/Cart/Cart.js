import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import classes from "./Cart.module.css";
import { MedicineProduct } from "../Medicine/Products";
 import { ShopContext } from "../context/shop-context";
import CartItem from "./CartItem";
import "./cartitem.css";

const Cart = () => {

  const [cartEmpty, setCartEmpty] = useState(true);

const {cartItems} = useContext(ShopContext);
  
  const EmptyCartMessage = () => {
    return <div className={classes["empty-message"]}>Your cart is empty</div>;
  };

  return (
    <div>
        <div className={classes.cart} onClick={() => setCartEmpty(!cartEmpty)}>
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      {cartEmpty && <EmptyCartMessage />}
    </div>
    <div className={classes.cart}>
  {MedicineProduct.map((product)=>{
     if(cartItems[product.id] !==0){
        return <CartItem data={product} />;
     }
  })}
</div>

    </div>
  );
};

export default Cart;
