import './cart-item.styles.jsx'
import { CartItemContainer, ItemDetails} from './cart-item.styles.jsx';


const CartItem = ({cartItem}) => {
  
    const {name,quantity,imageUrl,price} = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`}></img>
            <ItemDetails>
            <h2 className='name'>{name}</h2>
            <span className='price'>{quantity} * {price} $</span>
            </ItemDetails>       
        </CartItemContainer>
    )

}

export default CartItem