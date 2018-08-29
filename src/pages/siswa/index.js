import React from 'react';
import BreadCrumb from '../../components/BreadCrumb'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setSiswa } from '../../store/actions'
import { bindActionCreators } from 'redux'
import axios from '../../axios'
import Table from '../../components/TableWithAction'
import SearchInput from '../../components/SearchInput'
import { BarLoader } from 'react-spinners';
import { siswa } from '../../const/access'

class Siswa extends React.Component {
  constructor() {
    super()
    this.state = {
      query: '',
      isSearch: false,
      access: {
        tambah: false,
        edit: false,
        hapus: false
      }
    }
  }
  componentDidMount() {
    this.props.setSiswa()
    this.checkAccess()
  }

  checkAccess = () => {
    const role = localStorage.role
    const access = {
      tambah: false,
      edit: false,
      hapus: false
    }
    Object.keys(siswa).forEach(function(key,index) {
      if (siswa[key].indexOf(role) >= 0) {
        access[key] = true
      }
    });
    this.setState({access})
  }

  handleChange = (e) => {
    if (e.target.value !== '') {
      this.setState({isSearch: true})
      this.props.setSiswa(1, e.target.value)
    } else {
      this.setState({isSearch: false})
      this.props.setSiswa()
    }
    this.setState({[e.target.name]: e.target.value})

  }

  handlePageClick = (data) => {
    const { selected } = data
    this.props.setSiswa(selected + 1)

  }

  handleDelete = (id) => {
    const token = localStorage.token
    const headers = {
      token
    }
    axios.delete(`/siswa/${id}`, { headers }).then((res) => {
      this.props.setSiswa()
    }).catch(err => console.log(err))
  }

  render() {
    const { siswa, pages, loading } = this.props
    const { query } = this.state
    return (
      <div className="container">
        <BreadCrumb
          secondText="Siswa"
        />
      {
        this.state.access.tambah && (
          <Link className="btn btn-primary" to="/siswa/create" style={{ marginBottom: 10}} ><i className="fas fa-plus"></i> Tambah</Link>
        )
      }
        <SearchInput
          query={query}
          handleChange={this.handleChange}
        />
        <Table
          data={siswa}
          thead={['Npm','Nama','Jk','Alamat','No Telp','Aksi']}
          tbody={['npm','nama', 'jk', 'alamat', 'no_telp']}
          editUrl={this.state.access.edit ? "/siswa/edit" : null }
          pages={pages}
          handlePageClick={this.handlePageClick}
          deleteAction={this.state.access.hapus ? (id) => this.handleDelete(id) : null }
        />
        <center>
          <BarLoader
            color={'#123abc'}
            loading={loading}
            className="middle-center"
          />
        </center>
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

const mapDispatchToProps = dispatch => bindActionCreators({setSiswa}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Siswa)
