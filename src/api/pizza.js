import axios from "axios"

export const fetchPizzas = async (category = 0, sort, currentPage = 1) => {
  const params = {
    page: currentPage,
    limit: 4,
    category: category || '',
    sortBy: sort
  }
  const { data } = await axios.get(`https://62b5e39c42c6473c4b3c5415.mockapi.io/items`, { params })
  
  return data
}