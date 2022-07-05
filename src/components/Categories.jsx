import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../store/filter/slice'

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

export const Categories = () => {
  const dispatch = useDispatch()
  const { category: categoryProp } = useSelector(state => state.filter)

  const onChangeCategory = (id) => dispatch(setCategory(id))

  return (
    <div className="categories">
      <ul>
        {
          categories.map((category, i) => {
            const className = categoryProp === i ? 'active' : ''
            return <li
              key={i}
              className={className}
              onClick={() => onChangeCategory(i)}
             >
              {category}
            </li>
          }
          )}
      </ul>
    </div>
  );
};
