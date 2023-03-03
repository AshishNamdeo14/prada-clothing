import { ReactComponent as ShoppingIcon } from '../../assets/logo/shopping-bag.svg';

import './cart-icon.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';

const CartIcon = () => {
    const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext)
    // const {cartItems} = useContext(CartContext)
    // const quantityArray = cartItems.map((quantity) => quantity.quantity );
    // const quantitySum = quantityArray.reduce((a,b)=>a+b);
    // const quantitySum =  quantityArray.reduce(partialSum, a => partialSum+a,0)
    const toggle = () => {setIsCartOpen(!isCartOpen)}

    return(
        <div className='cart-icon-container' onClick={toggle}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;