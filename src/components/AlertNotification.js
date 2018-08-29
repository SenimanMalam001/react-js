import React from 'react';
import SweetAlert from 'sweetalert2-react';

const AlertNotification = (props) => {
  const { type, status } = props
  let message
  if (type === 'loginFail'){
    message = 'Password atau Email Salah, Segera Cek Kembali!'
    return (
    <SweetAlert
      show={status}
      type="error"
      title="Gagal Login"
      text={message}
     />
    ) 
    }else{
      if (type === 'create') {
        message = 'Data Berhasil Di Tambahkan'
      } else if(type === 'delete'){
        message = 'Data Berhasil Di Hapus'
      } else if(type === 'login'){
        message = 'Anda Berhasil Login'
      } 
      else {
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
}

export default AlertNotification
