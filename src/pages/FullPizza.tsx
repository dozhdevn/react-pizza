import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { fetchPizzaItem } from '../store/Pizza';
import { selectPizzaItem } from '../store/Pizza/selectors'

export const FullPizza: React.FC = () => {
  const dispatch = useDispatch()
  const { id } = useParams() as { id: string }

  const { pizza, isLoading, isError } = useSelector(selectPizzaItem)

  useEffect(() => {
    dispatch(fetchPizzaItem(id)) 
  }, [dispatch, id])

  if (isLoading || !pizza) {
    return (
      <h1>Загрузка...</h1>
    )
  }

  return (
    <>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
      <div className="pizza-item">
        <div className="pizza-item__content">
          <img src={pizza.imageUrl} />
          <h2>{pizza.title}</h2>
          <h4>{pizza.price} ₽</h4>
        </div>
      </div>
    </>
  )
}
