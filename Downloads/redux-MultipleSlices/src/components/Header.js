import classes from "./Header.module.css";
import { useSelector } from "react-redux"; //
import { useDispatch } from "react-redux"; // step1
import { authActions } from "../store"; // step2
const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch(); // step 3
  // step4
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>/
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
