import { PizzaCart } from "../store/Cart/types"

export const calcTotalPrice = (items: PizzaCart[]) => {
  return items.reduce((sum, item) => item.price * item.count + sum, 0)
}