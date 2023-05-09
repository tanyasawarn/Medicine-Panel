 
const CartItem = (props) =>{
  
    const {id,name,description,price} = props.data;
    return (
        <div className="cartItem">
    <div className="description">
        <p><b>{name}</b></p>
        <p><b>{description}</b></p>
        <p><b>{price}</b></p>
    </div>
        </div>
    )
};

export default CartItem;