import './cart-dropdown.styles.jsx'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../contexts/cart.context'
import { useContext } from 'react'
import {  useNavigate } from 'react-router-dom'
import { EmptyMessage,CartDropDownContainer,CartItems } from './cart-dropdown.styles.jsx'

const CartDropDown = () =>{
    const {cartItems} = useContext(CartContext); 
    const Navigate = useNavigate()


    const goToCheckouthandler = () =>{
        Navigate('/checkout')
    }

    return(
        <CartDropDownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map(item => 
                        <CartItem key={item.id} cartItem={item}/>)) : 
                        (<EmptyMessage>
                            Your Cart is Empty
                        </EmptyMessage>)
                }
            </CartItems>
            <Button onClick={goToCheckouthandler}>GO TO CHECKOUT</Button>
        </CartDropDownContainer>
    )
}

export default CartDropDown