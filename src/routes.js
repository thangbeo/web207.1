import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Nav from "./components/nav";
import DashBoard from "./pages/admin/dashboard/index";
import NotFound from "./pages/admin/notfound404/index";
import Product from "./pages/admin/product/index";
import Category from "./pages/admin/category";
import AddCategoryForm from "./pages/admin/category/add";
import AddProductForm from "./pages/admin/product/add";
import EditProductForm from "./pages/admin/product/edit";
import DetailProductForm from "./pages/admin/product/detail";
import Signup from "./pages/web/signup";
import Signin from "./pages/web/signin";

const Routes = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Header />
          <div className="container-fluid">
            <div className="row">
              <Nav />
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <Switch>
                  <Route exact path="/">
                    <DashBoard {...props}></DashBoard>
                  </Route>
                  <Route exact path="/product">
                    <Product {...props} />
                  </Route>
                  <Route exact path="/category">
                    <Category {...props} />
                  </Route>
                  <Route exact path="/category/add">
                    <AddCategoryForm {...props} />
                  </Route>
                  <Route exact path="/product/add">
                    <AddProductForm {...props} />
                  </Route>
                  <Route exact path="/product/edit/:id">
                    <EditProductForm {...props} />
                  </Route>
                  <Route exact path="/product/detail/:id">
                    <DetailProductForm {...props} />
                  </Route>
                  <Route exact path="/signup">
                    <Signup />
                  </Route>
                  <Route exact path="/signin">
                    <Signin />
                  </Route>
                  <Route exact path="*">
                    <NotFound></NotFound>
                  </Route>
                </Switch>
              </main>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default Routes;
