import { Outlet, Link } from "react-router-dom";
import { Fragment , useContext } from "react";

import { UserContext } from "../../components/contexts/user.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import {ReactComponent as CrownLogo} from '../../assets/logo/crown.svg'
import './navbar.component.style'
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../components/contexts/cart.context";
import { NavigationContainer,NavLink,NavLinksContainer,LogoContainer } from "./navbar.component.style.jsx";


const NavigationBar = () => {
    const {currentState} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext)
    console.log(currentState,"in nac");

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrownLogo className="logo"/>
                </LogoContainer>
                <NavLinksContainer>
                    <LogoContainer to="shop">
                        SHOP
                    </LogoContainer>
                    { currentState ? 
                    (
                        <NavLink as='span' onClick={signOutUser}>{' '}SIGN OUT{' '}</NavLink>
                    ):(<NavLink to="auth">
                    SIGN IN
                </NavLink>)}
            <CartIcon/>
                </NavLinksContainer>
                {isCartOpen && <CartDropDown/>}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}
export default NavigationBar