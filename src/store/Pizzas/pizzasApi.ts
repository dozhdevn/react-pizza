import axios from "axios"
import { sortProperty } from "../Filter/types"
import { Pizza } from "../Pizza/types"

export class PizzasApi {
  public fetchPizzas =  async (category  = 0, sort: sortProperty, currentPage: number): Promise<Pizza[]> => {
    const params = {
      page: currentPage,
      limit: 4,
      category: category || '',
      sortBy: sort
    }
    const { data } = await axios.get<Pizza[]>(`https://62b5e39c42c6473c4b3c5415.mockapi.io/items`, { params })
    return data
  }
}