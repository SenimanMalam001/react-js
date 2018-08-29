import React from 'react';
import axios from '../../axios'
import Alert from '../../components/Alert'
import { Redirect } from 'react-router-dom'
import BreadCrumb from '../../components/BreadCrumb'
import Form from './form'
import AlertSuccess from '../../components/AlertSuccess'
import { connect } from 'react-redux'
import { setAllSiswa } from '../../store/actions'
import { bindActionCreators } from 'redux'

class SiswaCreate extends React.Component {
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
    const { npm,nama, jk, alamat, no_telp  } = this.state
    if (!alamat) {
      this.setState({
        error: {
          status: true,
          message: 'Alamat is Required'
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
    const { npm, nama, jk, alamat, no_telp} = this.state
    if (this.validate()) {
      const token = localStorage.token
      const headers = {
        token
      }
      axios.post('/siswa/create',{npm, nama, jk, alamat, no_telp},{ headers }).then((res) => {
        this.setState({ swalSuccess: true})
        this.props.history.push('/siswa')
      }).catch((err) => {
        const message = err.response.data.message
        this.setState({
          error: {
            status: true,
            message: message
          }
        })
      })
    }
    event.preventDefault()
  }

  componentDidMount() {
    this.props.setAllSiswa()
  }

  render() {
    const { alamat , no_telp, nama, npm, jk, error} = this.state
    return (
      <div className="container" style={{ marginTop: '20px'}}>
        <div className="col-md-4 offset-md-4">
          <BreadCrumb
            secondText="Siswa"
            thirdText="Tambah Siswa"
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
          type="create"
          status={this.state.swalSuccess}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    siswa: state.siswa,
    pages: state.pages,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({setAllSiswa}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SiswaCreate)
