import React from 'react'
import TextInputWithLabel from '../../components/TextInputWithLabel'


const Form = (props) => {
  const {
    handleSubmit,
    handleChange,
    npm,
    nama,
    jk,
    alamat,
    no_telp
  } = props
  return (
    <form onSubmit={ handleSubmit}>
      <TextInputWithLabel
        label="Npm"
        placeholder="Masukkan Npm"
        type="text"
        name="npm"
        value={npm}
        handleChange={handleChange}
      />
      <TextInputWithLabel
        type="text"
        label="nama"
        placeholder="nama"
        name="nama"
        value={nama}
        handleChange={handleChange}
      />
      <TextInputWithLabel
        type="text"
        label="jk"
        placeholder="Masukkan JK"
        name="jk"
        value={jk}
        handleChange={handleChange}
      />
      <TextInputWithLabel
        type="text"
        label="alamat"
        placeholder="Masukan Alamat"
        name="alamat"
        value={alamat}
        handleChange={handleChange}
      />
      <TextInputWithLabel
        type="text"
        label="no_telp"
        placeholder="Masukkan No Telp"
        name="no_telp"
        value={no_telp}
        handleChange={handleChange}
      />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )

}

export default Form
