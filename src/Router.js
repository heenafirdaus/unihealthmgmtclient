import { BrowserRouter, Switch, Route } from "react-router-dom";
import Edit from "./components/Edit";
import Delete from "./components/Delete";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import SelectPage from "./components/SelectPage";
import App from "./App";
import { useSelector } from "react-redux";
import NotFound from "./components/NotFound";

const Router = () => {
  const loginData = useSelector((state) => state.login);

  return (
    <>
      <BrowserRouter basename="/">
        <Navbar loginData={loginData} />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login/:type" component={Login} />

          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/select-action/:type" component={SelectPage} />
          <PrivateRoute exact path="/update/:studentid" component={Edit} />
          <PrivateRoute exact path="/update" component={Edit} />
          <PrivateRoute path="/delete" component={Delete} />

          <Route path={"*"} component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default Router;
