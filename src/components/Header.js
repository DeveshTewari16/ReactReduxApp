import classes from './Header.module.css';
import {useSelector,useDispatch} from 'react-redux';
import {authActions} from '../store/index';

const Header = () => {
  const isAuthenticated= useSelector(state=>state.auth.isAuth)

  const dispatcher=useDispatch();
  const logoutHandler=(e)=>{
    dispatcher(
      authActions.Logout()
    );
    e.preventDefault();
  }

  return (
    <header className={classes.header}>
      <h1>Redux App</h1>
      {isAuthenticated &&<nav>
        <ul>
          <li>
            <a href='/'>Products</a>
          </li>
          <li>
            <a href='/'>Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
