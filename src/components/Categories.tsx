import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../store/Filter'
import { selectFilter } from '../store/Filter/selector';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

export const Categories: React.FC = memo( (): React.ReactElement => {
  const dispatch = useDispatch()
  const { category: categoryProp } = useSelector(selectFilter)

  const onChangeCategory = (id: number) => dispatch(setCategory(id))

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
  )
}
)
