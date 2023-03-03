import { Outlet, Link } from "react-router-dom";
import { Fragment , useContext } from "react";

import { UserContext } from "../../components/contexts/user.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import {ReactComponent as CrownLogo} from '../../assets/logo/crown.svg'
import './navbar.component.style.scss'
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../components/contexts/cart.context";


const NavigationBar = () => {
    const {currentState} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext)
    console.log(currentState,"in nac");

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrownLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link-shop" to="shop">
                        SHOP
                    </Link>
                    { currentState ? 
                    (
                        <span className="nav-ling-signin mine" onClick={signOutUser}>{' '}SIGN OUT{' '}</span>
                    ):(<Link className="nav-link-signin" to="auth">
                    SIGN IN
                </Link>)}
            <CartIcon/>
                </div>
                {isCartOpen && <CartDropDown/>}
            </div>
            <Outlet />
        </Fragment>
    );
}
export default NavigationBar