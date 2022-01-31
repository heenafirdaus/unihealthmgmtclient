import {  Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { getStoreData } from "../../utils/storage";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const loginData = useSelector((state) => state.login);
  const history = useHistory();
  
  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          loginData?.accessToken || getStoreData("loginData")?.accessToken ? (
            <Component {...props} />
          ) : (
            history.push("/")
          )
        }
      />
    </>
  );
};
export default PrivateRoute;
