import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../firebase/Fire'

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.fullname}
          </td>                          
          <td>
            {this.props.obj.email}
          </td>
           <td align="center">
              <Link className="btn btn-primary" to={`/fire/edit/${this.props.obj.id}`}>Edit</Link>
           </td>
           <td align="center">
             {this.props.obj.id && <button data-toggle="tooltip" 
                    title="Tekan Delete untuk Menghapus Data ini!" 
                    className="btn btn-danger" 
                    onClick={ ( ) =>
                    db.collection('users').doc(this.props.obj.id)
                    .delete( )} >
                    Delete
                </button>}
           </td>
        </tr>
    );
  }
}

export default TableRow;