import {Route,Routes} from 'react-router-dom'
import Home from './routes/home/home.component';
import NavigationBar from './routes/navbar/navbar.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './components/checkout/checkout.component';

const App = () => {
  
  return (
   <Routes>
    <Route path='/' element={<NavigationBar/>}>
       <Route index element={<Home/>}/>
       <Route path='shop' element={<Shop/>}/>
       <Route path='checkout' element={<Checkout/>}/>
       <Route path='auth' element={<Authentication />}/>
    </Route>
   </Routes>
  );
}

export default App;
