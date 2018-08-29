import React from 'react';
import SweetAlert from 'sweetalert2-react';

const AlertSuccess = (props) => {
  const { type, status } = props
  let message
  if (type == 'create') {
    message = 'Data Berhasil Di Tambahkan'
  } else {
    message = 'Data Berhasil Di Ubah'
  }
  return (
    <SweetAlert
      show={status}
      type="success"
      title="Berhasil"
      text={message}
     />
  )
}

export default AlertSuccess
