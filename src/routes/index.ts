import { Cart } from "../pages/Cart"
import { FullPizza } from "../pages/FullPizza"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"

export interface IRoute {
  path: string
  exact?: true
  element: React.FC
}

export enum RouteNames {
  LOGIN = '/login',
  HOME = '/',
  CART = '/cart',
  FULL_PIZZA = '/pizza/:id',
  NOT_FOUND = '/*'
}

export const publicRoutes: IRoute[] = [
  {path: RouteNames.LOGIN, exact: true, element: Login}
]

export const privateRoutes: IRoute[] = [
  {path: RouteNames.HOME, exact: true, element: Home},
  {path: RouteNames.CART, exact: true,  element: Cart},
  {path: RouteNames.FULL_PIZZA,  element: FullPizza}
]