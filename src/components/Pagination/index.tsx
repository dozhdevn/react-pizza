import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'

import styles from './Pagination.module.scss'
import { setCurrentPage } from '../../store/Filter'
import { selectFilter } from '../../store/Filter/selector'

export const Pagination: React.FC = () => {

  const dispatch = useDispatch()
  const { currentPage } = useSelector(selectFilter)

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page))
  }

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={e => onChangePage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
      forcePage={currentPage - 1}
    />
  )
}
