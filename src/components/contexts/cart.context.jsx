import { useEffect } from "react";
import { createContext ,useState} from "react";

const addCartItems = (cartItems,productToAdd) => {
    console.log("Found2",cartItems);
    //Find If Cart Items contains product to Add 

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id);  
    console.log("existingCartItem2",existingCartItem);

    //If Found Increment the quantity
    
    if(existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id 
            ? {...cartItem, quantity : cartItem.quantity + 1 } : cartItem
            )
    }
    
    //return new array with modified cart Items 
    console.log("Found33",cartItems);
    console.log("Found",productToAdd);
    return [...cartItems,{...productToAdd,quantity: 1 }]
}


const clearCartItems = (cartItems,cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id != cartItemToClear.id )
}


const removeCartItems = (cartItems,cartItemToRemove) => {
    //Find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id);  

    //Check the quantity to be removed is equal to 1, if it is then remove the item from the cart
        if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id != cartItemToRemove.id )
    }    

    //return back the cart items matching with reduce quatity
    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id 
        ? {...cartItem, quantity : cartItem.quantity - 1 } : cartItem
        )

}

export const CartContext = createContext({
    isCartOpen :false,
    setIsCartOpen : () => {},
    cartItems: [],
    addItemsToCart : () => {},
    removeItemsFromCart: () => {},
    clearCartItem: () => {},
    cartCount : 0,
    cartTotal : 0
})

export const CartProvider = ({children}) => {
    const [isCartOpen,setIsCartOpen] = useState(false)
    const [cartItems,setCartItems] = useState([])
    const [cartCount,setCartCount] = useState(0)
    const [cartTotal,setCartTotal] = useState(0)

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total,cartItem)=> total + cartItem.quantity,0)
        setCartCount(newCartCount)
    },[cartItems])

    useEffect(()=>{
        const newCartTotal = cartItems.reduce((total,cartItem)=> total + cartItem.quantity * cartItem.price,0)
        setCartTotal(newCartTotal)
    },[cartItems])


    const addItemsToCart = (productToAdd) => {
        setCartItems(addCartItems(cartItems,productToAdd))
    }

    const ClearItemsFromCart = (cartItemToclear) => {
        setCartItems(clearCartItems(cartItems,cartItemToclear))
    }

    const removeItemsFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItems(cartItems,cartItemToRemove))
    }


    const value = {isCartOpen,setIsCartOpen,addItemsToCart,cartItems,cartCount,removeItemsFromCart,ClearItemsFromCart,cartTotal}

    
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}