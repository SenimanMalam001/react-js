import React from 'react';
import Thead from './Thead'
import Tbody from './TbodyWithAction'
import Pagination from './Pagination'


class TableWithAction extends React.Component {
  constructor() {
    super()
  }
  render() {
    const {
      withoutPagination,
      actionNotDisplay,
      handlePageClick,
      data,
      thead,
      tbody,
      editUrl,
      deleteAction,
      pages,
      customAction
    } = this.props
    return (
      <div className="table-responsive">
        <table className="table table-hover">
          <Thead
            text={thead}
          />
          <Tbody
            data={ data }
            display={tbody}
            editUrl={editUrl}
            deleteAction={deleteAction}
            actionNotDisplay={actionNotDisplay}
            customAction={customAction}
          />
        </table>
        {
          !withoutPagination && (
            <Pagination
              pages={pages}
              handlePageClick={handlePageClick}
            />
          )
        }
      </div>
    )
  }
}


export default TableWithAction
