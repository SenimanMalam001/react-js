import React from 'react';
import axios from '../../axios'
import Alert from '../../components/Alert'
import { Redirect } from 'react-router-dom'
import BreadCrumb from '../../components/BreadCrumb'
import Form from './form'
import AlertSuccess from '../../components/AlertSuccess'

class SiswaEdit extends React.Component {
  constructor() {
    super()
    this.state = {
      npm: '',
      nama: '',
      jk: '',
      alamat: '',
      no_telp: '',
      error: {
        status: false,
        message: ''
      },
      swalSuccess: false
    }
  }

  handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
  }

  validate = () => {
    const { npm, alamat, jk, nama, no_telp} = this.state
    if (!npm) {
      this.setState({
        error: {
          status: true,
          message: 'npm is Required'
        }
      })
      return false
    }

    if (!alamat) {
      this.setState({
        error: {
          status: true,
          message: 'alamat is Required'
        }
      })
      return false
    }

    if (!nama) {
      this.setState({
        error: {
          status: true,
          message: 'Nama is Required'
        }
      })
      return false
    }

    if (!jk) {
      this.setState({
        error: {
          status: true,
          message: 'jk is Required'
        }
      })
      return false
    }

    if (!no_telp) {
      this.setState({
        error: {
          status: true,
          message: 'No Telp is Required'
        }
      })
      return false
    }
    return true
  }

  handleSubmit = (event) => {
    const { npm, alamat, nama, jk, no_telp} = this.state
    const { id } = this.props.match.params
    if (this.validate()) {
      const token = localStorage.token
      const headers = {
        token
      }

      axios.put(`/siswa/${id}`,{npm, alamat, nama, jk, no_telp},{ headers }).then((res) => {
        this.setState({swalSuccess: true})
        this.props.history.push('/siswa')
      }).catch((err) => {
        console.log(err)
      })
    }
    event.preventDefault()
  }

  getData = () => {
    const { id } = this.props.match.params
    const token = localStorage.token
    const headers = {
      token
    }
    axios.get(`/siswa/${id}`, { headers}).then((res) => {
      const { npm, alamat, nama, jk, no_telp } = res.data.data
      this.setState({
        npm,
        nama,
        jk,
        alamat,
        no_telp
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const { npm , alamat, nama, jk, no_telp,  error} = this.state
    return (
      <div className="container" style={{ marginTop: '20px'}}>

        <div className="col-md-4 offset-md-4">
          <BreadCrumb
            secondText="Siswa"
            thirdText="Edit Siswa"
            secondUrl="/siswa"
          />
          {
            error.status && <Alert type="danger" text={error.message} />
          }
          <Form
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            npm={npm}
            nama={nama}
            jk={jk}
            alamat={alamat}
            no_telp={no_telp}
          />
        </div>
        <AlertSuccess
          type="edit"
          status={this.state.swalSuccess}
        />
      </div>
    )
  }
}

export default SiswaEdit
