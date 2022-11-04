import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as CrownLogo} from '../../assets/logo/crown.svg'
import './navbar.component.style.scss'

const NavigationBar = () => {
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
                    <Link className="nav-link-signin" to="Sign-in">
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}
export default NavigationBar