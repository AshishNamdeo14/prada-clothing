import { Outlet, Link } from "react-router-dom";
import { Fragment , useContext } from "react";
import { UserContext } from "../../components/contexts/user.context";
import {ReactComponent as CrownLogo} from '../../assets/logo/crown.svg'
import './navbar.component.style.scss'

const NavigationBar = () => {
    const {currentState} = useContext(UserContext)
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
                    <Link className="nav-link-signin" to="auth">
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}
export default NavigationBar