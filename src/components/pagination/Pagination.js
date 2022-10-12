import React from 'react'
import { usePagination, DOTS } from '../../hooks/usePagination'
import PropTypes from 'prop-types'
import { CPagination, CPaginationItem } from '@coreui/react'
import { arrowLeft, arrowRight } from 'src/assets/icons/arrows'
import CIcon from '@coreui/icons-react'

export const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  return (
    <CPagination aria-label="Table pagination">
      <CPaginationItem
        disabled={currentPage <= 1}
        aria-label="Previous"
        onClick={onPrevious}
        role="button"
      >
        <CIcon icon={arrowRight} />
      </CPaginationItem>

      {paginationRange.map((pageNumber, idx) => {
        if (pageNumber === DOTS) {
          return <CPaginationItem key={idx}>&#8230;</CPaginationItem>
        }

        return (
          <CPaginationItem
            role="button"
            active={pageNumber === currentPage}
            key={idx}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </CPaginationItem>
        )
      })}

      <CPaginationItem disabled={currentPage >= pageSize} onClick={onNext} role="button">
        <CIcon icon={arrowLeft} />
      </CPaginationItem>
    </CPagination>
  )
}

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  totalCount: PropTypes.number,
  siblingCount: PropTypes.number,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  className: PropTypes.string,
}

export default Pagination
