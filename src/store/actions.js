import {
  SET_TOKEN,
  SET_PETUGAS,
  SET_PENJAMIN_PENJUALAN,
  SET_PROFIL,
  SET_PEMBAYARAN_PIUTANG,
  SET_PEMBAYARAN_HUTANG,
  SET_PRODUK,
  SET_PERSEDIAAN,
  SET_REKAM_MEDIK,
  SET_STOK_AWAL,
  SET_STOK_AKHIR,
  SET_PEMBELIAN,
  SET_TBS_PEMBELIAN,
  SET_PENJUALAN,
  SET_TBS_PENJUALAN,
  SET_KAS_MANUAL,
  SET_KAS_MUTASI,
  SET_STOK_OPNAME,
  SET_REGISTRASI,
  SET_ITEM_MASUK,
  SET_ITEM_KELUAR,
  SET_PASIEN_REGISTRASI,
  SET_KOMISI,
  SET_KOMISI_PENJUALAN,
  SET_USERS,
  SET_KAS,
  SET_POSISI_KAS,
  SET_TRANSAKSI_KAS,
  SET_PASIEN,
  SET_PENJAMIN,
  SET_SUPPLIER,
  SET_RUANGANS,
  ERROR,
  LOADING,
  LOADING_FINISH,
  SEARCH_USERS,
  SET_PAGES,
  SET_KATEGORI_TRANSAKSI,
  SET_POLI,
  SET_JENIS_LAPORAN,
  SET_SISWA
} from './actionTypes'
import axios from '../axios'

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    payload: token
  }
}

export const setPenjaminPenjualan = (data) => {
  return {
    type: SET_PENJAMIN_PENJUALAN,
    payload: data
  }
}

export const setPasienRegistrasi = (pasien) => {
  return {
    type: SET_PASIEN_REGISTRASI,
    payload: pasien
  }
}

export const setAllUsers = () => {
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/users/all`,{ headers: { token, otoritas: 'get_user' }}).then((res) => {
      const { data } = res.data
      dispatch({
        type: SET_USERS,
        payload: data
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setUsers = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/users?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_user' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_USERS,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setProfil = () => {
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/profil`,{ headers: { token, otoritas: 'get_profil' }}).then((res) => {
      const { data } = res.data
      dispatch({
        type: SET_PROFIL,
        payload: data
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setRekamMedik = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/rekammedik?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_rekam_medik' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_REKAM_MEDIK,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setPembayaranPiutang = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/pembayaranpiutang?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_pembayaran_piutang' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_PEMBAYARAN_PIUTANG,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setPembayaranHutang = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/pembayaranhutang?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_pembayaran_hutang' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_PEMBAYARAN_HUTANG,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setPetugas = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/petugas?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_petugas' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_PETUGAS,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setAllPetugas = () => {
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/petugas/all`,{ headers: { token, otoritas: 'get_petugas' }}).then((res) => {
      const { data } = res.data
      dispatch({
        type: SET_PETUGAS,
        payload: data
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setPembelian = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/pembelian?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_pembelian' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_PEMBELIAN,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setJenisLaporan = (jenis_laporan) => {
  return {
    type: SET_JENIS_LAPORAN,
    payload: jenis_laporan
  }
}

export const setClearLaporanPenjualan = () => {
  return {
    type: SET_PENJUALAN,
    payload: []
  }
}
export const setLaporanPenjualan = (dari_tanggal, sampai_tanggal) => {
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/penjualan/interval?dari_tanggal=${dari_tanggal}&sampai_tanggal=${sampai_tanggal}`,{ headers: { token, otoritas: 'get_penjualan' }}).then((res) => {
      const { data } = res.data
      dispatch({
        type: SET_PENJUALAN,
        payload: data
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setPenjualan = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/penjualan?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_penjualan' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_PENJUALAN,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setTbsPembelian = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/tbs-pembelian?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_pembelian' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_TBS_PEMBELIAN,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setTbsPenjualan = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/tbs-penjualan?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_penjualan' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_TBS_PENJUALAN,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setStokOpname = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/stok-opname?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_stok_opname' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_STOK_OPNAME,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}
export const setStokAwal = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/stok-awal?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_stok_awal' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_STOK_AWAL,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setItemMasuk = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/item-masuk?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_item_masuk' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_ITEM_MASUK,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setItemKeluar = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/item-keluar?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_item_keluar' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_ITEM_KELUAR,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setKasMutasi = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/kas-mutasi?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_kas_mutasi' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_KAS_MUTASI,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setKasManual = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/kas-manual?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_kas_manual' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_KAS_MANUAL,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setTransaksiKas = (query) => {
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/transaksikas?${query}`,{ headers: { token, otoritas: 'get_transaksi_kas' }}).then((res) => {
      const { data, posisi_kas } = res.data
      dispatch({
        type: SET_TRANSAKSI_KAS,
        payload: data
      })
      dispatch({
        type: SET_POSISI_KAS,
        payload: posisi_kas == null ? 0 : posisi_kas
      })

      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setPersediaan = (query) => {
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/persediaan?${query}`,{ headers: { token, otoritas: 'get_persediaan' }}).then((res) => {
      const { data, stok_akhir } = res.data
      dispatch({
        type: SET_PERSEDIAAN,
        payload: data
      })
      dispatch({
        type: SET_STOK_AKHIR,
        payload: stok_akhir
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setRegistrasi = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/registrasi?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_registrasi' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_REGISTRASI,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setAllRegistrasi = () => {
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/registrasi/all`,{ headers: { token, otoritas: 'get_registrasi' }}).then((res) => {
      const { data } = res.data
      dispatch({
        type: SET_REGISTRASI,
        payload: data
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const  setClearRegistrasi = () => {
  return {
    type: SET_REGISTRASI,
    payload: []
  }
}

export const setPasien = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/pasien?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_pasien' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_PASIEN,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setAllPasien = () => {
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/pasien/all`,{ headers: { token, otoritas: 'get_pasien' }}).then((res) => {
      const { data} = res.data
      dispatch({
        type: SET_PASIEN,
        payload: data
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setKomisi = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/komisi?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_komisi' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_KOMISI,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setKomisiPenjualan = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/komisipenjualan?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_komisi_penjualan' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_KOMISI_PENJUALAN,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setProduk = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/produk?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_produk', redis_key: 'Produk' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_PRODUK,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setAllProduk = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/produk/all`,{ headers: { token, otoritas: 'get_produk', redis_key:'Produk' }}).then((res) => {
      const { data } = res.data
      dispatch({
        type: SET_PRODUK,
        payload: data
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setSupplier = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/supplier?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_supplier' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_SUPPLIER,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setAllSupplier = () => {
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/supplier/all`,{ headers: { token, otoritas: 'get_supplier' }}).then((res) => {
      const { data } = res.data
      dispatch({
        type: SET_SUPPLIER,
        payload: data
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setPenjamin = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/penjamin?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_penjamin' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_PENJAMIN,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setAllPenjamin = () => {
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/penjamin/all`,{ headers: { token, otoritas: 'get_penjamin' }}).then((res) => {
      const { data } = res.data
      dispatch({
        type: SET_PENJAMIN,
        payload: data
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setKas = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/kas?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_kas' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_KAS,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}
export const setAllKas = () => {
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/kas/all`,{ headers: { token, otoritas: 'get_kas' }}).then((res) => {
      const { data } = res.data
      dispatch({
        type: SET_KAS,
        payload: data
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setRuangans = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/ruangan?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_ruangan' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_RUANGANS,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setAllRuangans = () => {
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/ruangan/all`,{ headers: { token, otoritas: 'get_ruangan' }}).then((res) => {
      const { data } = res.data
      dispatch({
        type: SET_RUANGANS,
        payload: data
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setPoli = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/poli?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_poli' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_POLI,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}
export const setKategoriTransaksi = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/kategori-transaksi?page=${page}&q=${query}`,{ headers: { token, otoritas: 'get_kategori_transaksi' }}).then((res) => {
      const { data, pages } = res.data.data
      dispatch({
        type: SET_KATEGORI_TRANSAKSI,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setAllKategoriTransaksi = () => {
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/kategori-transaksi/all`,{ headers: { token, otoritas: 'get_kategori_transaksi' }}).then((res) => {
      const { data, pages } = res.data
      dispatch({
        type: SET_KATEGORI_TRANSAKSI,
        payload: data
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setSiswa = (page, query) => {
  if (!page) {
    page = 1
  }

  if (!query) {
    query = ''
  }
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/siswa?page=${page}&q=${query}`,{ headers: { token }}).then((res) => {
      const { data, pages } = res.data.data
      console.log(data);
      console.log(pages);
      dispatch({
        type: SET_SISWA,
        payload: data
      })
      dispatch({
        type: SET_PAGES,
        payload: pages
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const setAllSiswa = () => {
  return dispatch => {
    const token = localStorage.token
    dispatch(loading)
    axios.get(`/siswa/all`,{ headers: { token }}).then((res) => {
      const { data} = res.data
      dispatch({
        type: SET_SISWA,
        payload: data
      })
      dispatch(loadingFinish)
    }).catch((err) => {
      dispatch(loadingFinish)
      console.log(err)
    })
  }
}

export const loading  = { type: LOADING }
export const loadingFinish  = { type: LOADING_FINISH }
export const error  = { type: ERROR }
