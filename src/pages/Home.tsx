import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Categories } from '../components/Categories'
import { Sort } from '../components/Sort'
import { PizzaBlock } from '../components/PizzaBlock'
import { Skeleton } from '../components/PizzaBlock/Skeleton'
import { Pagination } from '../components/Pagination'
import { fetchPizzas } from '../store/Pizzas'
import { selectPizzas, selectLoading } from '../store/Pizzas/selectors'
import { selectFilter } from '../store/Filter/selector'


export const Home: React.FC = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectPizzas)
  const loading = useSelector(selectLoading)
  const { category, sort, currentPage } = useSelector(selectFilter)

  useEffect(() => {
    dispatch(fetchPizzas({category, sort}))
  }, [dispatch, category, sort])

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
