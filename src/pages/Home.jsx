import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Categories } from '../components/Categories'
import { Sort } from '../components/Sort'
import { PizzaBlock } from '../components/PizzaBlock'
import { Skeleton } from '../components/PizzaBlock/Skeleton'
import { fetchPizzas } from '../api/pizza'
import { Pagination } from '../components/Pagination'


export const Home = () => {
  const { category, sort, currentPage } = useSelector(state => state.filter)
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setLoading(true)
    fetchPizzas(category, sort.sortProperty, currentPage).then(data => {
      setItems(data)
      setLoading(false)
    })
  }, [category, sort, currentPage])

  const pizzas = items.map(pizza =>
    <PizzaBlock
      key={pizza.id}
      id={pizza.id}
      imageUrl={pizza.imageUrl}
      title={pizza.title}
      sizes={pizza.sizes}
      types={pizza.types}
      price={pizza.price} />)

  const skeleton = [...Array(9)].map((_, index) => <Skeleton key={index} />)

  return (
    <div className='contaner'>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          loading
            ? skeleton
            : pizzas
        }
      </div>
      <Pagination />
    </div>
  )
}
