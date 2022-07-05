import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'

import styles from './Pagination.module.scss'
import { setCurrentPage } from '../../store/filter/slice'

export const Pagination = () => {

  const dispatch = useDispatch()

  const onChangePage = (page) => {
    dispatch(setCurrentPage(page))
  }

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={e => onChangePage(e.selected + 1)}
      pageRangeDisplayed={5}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  )
}
