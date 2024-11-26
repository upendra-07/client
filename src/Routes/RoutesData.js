import { lazy } from "react";
import { ROUTES_CONST } from "./RouteConstant";

const WelcomePage = lazy(() => import("../Screens/WelcomePage/WelcomePage")),
  signUp = lazy(() => import("../Screens/SignUp/SignUp")),
  loginPage = lazy(() => import("../Screens/Login/Login")),
  homePage = lazy(() => import("../Screens/Home/Home"));

const routes = [
  {
    path: ROUTES_CONST.WELCOME,
    exact: true,
    component: WelcomePage,
    isPublic: true,
  },
  {
    path: ROUTES_CONST.LOGIN,
    exact: true,
    component: loginPage,
    isPublic: true,
  },
  {
    path: ROUTES_CONST.HOME,
    exact: true,
    component: homePage,
    isPublic: false,
  },
];

export default routes;
