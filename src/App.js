import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import { UserList } from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/NewUser/NewUser";
import Error from "./pages/Error/Error";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/NewProduct/NewProduct";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/new-user">
            <NewUser />
          </Route>
          <Route path="/user/:id">
            <User />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:prodId">
            <Product />
          </Route>
          <Route path="/new-product">
            <NewProduct />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
