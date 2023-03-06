import './home.component.style.scss'
// import '../../categories.styles.scss'
import '../../components/directory-item/directory-item.component'
import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router-dom';

const Home = () =>{
  
    return (
        <div>
             <Directory />
        </div>
    )
}

export default Home