import axios from "axios"
import { Pizza } from "./types"

export class PizzaItem {
  public fetchPizzaItem = async (id: string): Promise<Pizza> => {
    const { data } = await axios.get<Pizza>('https://62b5e39c42c6473c4b3c5415.mockapi.io/items/' + id)
    return data
  }
}