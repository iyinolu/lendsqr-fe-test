import React from 'react'
import PropTypes from 'prop-types'

const Pagination = React.lazy(() => import('./Pagination'))
const PageSizeSelect = React.lazy(() => import('./PageSizeSelect'))

export const TablePaginationGroup = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
  onChangePageSize,
}) => {
  return (
    <div className="custom-pagination">
      <PageSizeSelect pageSize={pageSize} onChangePageSize={onChangePageSize} />
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        siblingCount={siblingCount}
        currentPage={currentPage}
        pageSize={pageSize}
        className={className}
      />
    </div>
  )
}

TablePaginationGroup.propTypes = {
  onPageChange: PropTypes.func,
  totalCount: PropTypes.number,
  siblingCount: PropTypes.number,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  className: PropTypes.string,
  onChangePageSize: PropTypes.func,
}

export default TablePaginationGroup
