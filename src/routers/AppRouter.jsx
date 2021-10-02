import { Footer, NavBar, Navigation } from "components/common";
import * as ROUTES from "constants/routes";
import { createBrowserHistory } from "history";
import React from "react";
// import { Navbar } from "react-bootstrap";
import { Route, Router, Switch } from "react-router-dom";
import * as view from "views";
import AdminRoute from "./AdminRoute";
import ClientRoute from "./ClientRoute";
import PublicRoute from "./PublicRoute";

// Revert back to history v4.10.0 because
// v5.0 breaks navigation
export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <>
      <Navigation />
      <NavBar />
      <Switch>
        <Route component={view.Search} exact path={ROUTES.SEARCH} />
        <Route component={view.Home} exact path={ROUTES.HOME} />
        {/* <Route component={view.Shop} exact path={ROUTES.SHOP} /> */}
        <Route
          component={view.Category1}
          exact
          path={ROUTES.CATEGORY1}
        />
        <Route
          component={view.Category2}
          exact
          path={ROUTES.CATEGORY2}
        />
        <Route
          component={view.Category3}
          exact
          path={ROUTES.CATEGORY3}
        />
         <Route
          component={view.Category4}
          exact
          path={ROUTES.CATEGORY4}
        />
         <Route
          component={view.Category5}
          exact
          path={ROUTES.CATEGORY5}
        />
         <Route
          component={view.Category6}
          exact
          path={ROUTES.CATEGORY6}
        />
         <Route
          component={view.Category7}
          exact
          path={ROUTES.CATEGORY7}
        /> 
        <Route
        component={view.Category8}
        exact
        path={ROUTES.CATEGORY8}
      /> 
      <Route
      component={view.Category9}
      exact
      path={ROUTES.CATEGORY9}
    />
     <Route
    component={view.Category10}
    exact
    path={ROUTES.CATEGORY10}
  />
        <PublicRoute component={view.SignUp} path={ROUTES.SIGNUP} />
        <PublicRoute component={view.SignIn} exact path={ROUTES.SIGNIN} />
        <PublicRoute
          component={view.ForgotPassword}
          path={ROUTES.FORGOT_PASSWORD}
        />
        <Route component={view.ViewProduct} path={ROUTES.VIEW_PRODUCT} />
        <Route component={view.AboutUs} path={ROUTES.ABOUT_US} />
        <Route component={view.PrivacyPolicy} path={ROUTES.PRIVACY_POLICY} />
        <Route component={view.ReturnPolicy} path={ROUTES.RETURN_POLICY} />
        <Route
          component={view.TermsAndConditions}
          path={ROUTES.TERMS_AND_CONDITIONS}
        />
        <ClientRoute component={view.UserAccount} exact path={ROUTES.ACCOUNT} />
        <ClientRoute
          component={view.EditAccount}
          exact
          path={ROUTES.ACCOUNT_EDIT}
        />
        <ClientRoute
          component={view.CheckOutStep1}
          path={ROUTES.CHECKOUT_STEP_1}
        />
        <ClientRoute
          component={view.CheckOutStep2}
          path={ROUTES.CHECKOUT_STEP_2}
        />
        <ClientRoute
          component={view.CheckOutStep3}
          path={ROUTES.CHECKOUT_STEP_3}
        />
        <AdminRoute
          component={view.Dashboard}
          exact
          path={ROUTES.ADMIN_DASHBOARD}
        />
        <AdminRoute component={view.Products} path={ROUTES.ADMIN_PRODUCTS} />
        <AdminRoute component={view.AddProduct} path={ROUTES.ADD_PRODUCT} />
        <AdminRoute
          component={view.EditProduct}
          path={`${ROUTES.EDIT_PRODUCT}/:id`}
        />
        <PublicRoute component={view.PageNotFound} />
      </Switch>
      <Footer />
    </>
  </Router>
);

export default AppRouter;
