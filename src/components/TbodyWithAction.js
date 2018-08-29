import React from 'react';
import SweetAlert from 'sweetalert2-react';
import { Link } from 'react-router-dom'
import Currency from 'react-currency-format';

class TbodyWithAction extends React.Component {
  constructor() {
    super()
    this.state = {
      swalDelete: false,
      id: null,
    }
  }
  render() {
    const { data, display, editUrl, deleteAction, customAction } = this.props
    let { actionNotDisplay } = this.props
    return (
      <tbody>
        {
          data.length ? data.map((data, index) => {
            return (
              <tr key={index}>
                {
                  Object.keys(data).map((key) => {
                    if (display.indexOf(key) > -1) {
                      return (
                        <td key={key}>{!isNaN(data[key]) && key != 'no_telp' ? (
                          <Currency
                            value={data[key]}
                            displayType={'text'}
                            thousandSeparator={true}
                           />
                       ): data[key] }</td>
                      )
                    }
                  })
                }
                {
                  !actionNotDisplay && (
                    <td>
                      {
                        customAction && customAction(data.id)
                      }
                      {
                        editUrl && <Link className="btn btn-warning" to={`${editUrl}/${data.id}`}> <i className="fas fa-edit"></i> </Link>
                      }
                      {
                        deleteAction && (
                          <button
                            className="btn btn-danger"
                            onClick={ () => {
                              this.setState({swalDelete: true, id: data.id})
                            }}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        )
                      }
                    </td>
                  )
                }

              </tr>
            )
          })
          :
          (<tr>
            <td
              colSpan={display.length + 1}
              style={{ textAlign: 'center'}}>
              Tidak Ditemukan Data
            </td>
          </tr>)
        }
        <SweetAlert
          show={this.state.swalDelete}
          type="warning"
          title="Yakin ingin Menghapus?"
          text="Data Yang DiHapus Tidak Akan Kembali"
          showCancelButton
          onConfirm={() => {
            this.setState({ swalDelete: false })
            deleteAction(this.state.id)
          }}
         />
      </tbody>
    )

  }
}
export default TbodyWithAction
