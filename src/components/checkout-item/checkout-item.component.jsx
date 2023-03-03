
import './checkout-item.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../contexts/cart.context'

const CheckOutItem = ({cartItem}) =>{
    const {ClearItemsFromCart ,addItemsToCart , removeItemsFromCart} = useContext(CartContext)
    const {price,name,quantity,imageUrl} = cartItem

    const addItemHandler = () => addItemsToCart(cartItem);
    const removeItemHandler = () => removeItemsFromCart(cartItem);

    return (
    <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={imageUrl} alt={`${name}`}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={removeItemHandler}>
            &minus;
            </div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={addItemHandler}>
            &#x2b;
            </div>
            </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => ClearItemsFromCart(cartItem)}>&#10005;</div>
    </div>
    )
}

export default CheckOutItem