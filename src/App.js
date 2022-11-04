import {Route,Routes} from 'react-router-dom'
import Home from './routes/home/home.component';
import NavigationBar from './routes/navbar/navbar.component';
import SignIn from './routes/sign-in/sign-in.component';

const Shop = () => {
  return <h1>I am  Shope</h1>;
};

const App = () => {
  
  return (
   <Routes>
    <Route path='/' element={<NavigationBar/>}>
       <Route index element={<Home/>}/>
       <Route path='shop' element={<Shop/>}/>
       <Route path='Sign-in' element={<SignIn/>}/>
    </Route>
   </Routes>
  );
}

export default App;
