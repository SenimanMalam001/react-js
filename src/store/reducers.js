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
  SET_PASIEN,
  SET_PENJAMIN,
  SET_SUPPLIER,
  SET_PAGES,
  SET_USERS,
  SET_KAS,
  SET_POSISI_KAS,
  SET_TRANSAKSI_KAS,
  SET_RUANGANS,
  SET_POLI,
  LOADING,
  LOADING_FINISH,
  ERROR,
  SET_KATEGORI_TRANSAKSI,
  SET_JENIS_LAPORAN,
  SET_SISWA
} from './actionTypes'

const initialState = {
  token: '',
  profil: '',
  users: [],
  petugas: [],
  rekammedik: [],
  kas: [],
  posisikas: 0,
  persediaan: [],
  stok_akhir: 0,
  transaksikas: [],
  kas_manuals: [],
  pembayaranpiutangs: [],
  pembayaranhutangs: [],
  piutangs: [],
  pembelians: [],
  tbs_pembelians: [],
  penjualans: [],
  tbs_penjualans: [],
  kas_mutasis: [],
  komisi: [],
  komisipenjualans: [],
  item_masuks: [],
  item_keluars: [],
  stok_awals: [],
  stok_opnames: [],
  pasien: [],
  pasien_registrasi: '',
  penjamin: [],
  penjamin_penjualan: null,
  registrasi: [],
  produk: [],
  supplier: [],
  poli: [],
  ruangan: [],
  kategori_transaksi: [],
  loading: false,
  error: false,
  pages: 0,
  jenis_laporan: '',
  siswa: []
}
const reducer = (state = initialState, action) => {

  if(action.type === SET_JENIS_LAPORAN) {
    return {
      ...state,
      jenis_laporan: action.payload
    }
  }

  if(action.type === SET_TOKEN) {
    return {
      ...state,
      token: action.payload
    }
  }

  if(action.type === SET_PAGES) {
    return {
      ...state,
      pages: action.payload
    }
  }
  if(action.type === SET_STOK_AKHIR) {
    return {
      ...state,
      stok_akhir: action.payload
    }
  }
  if(action.type === SET_PETUGAS) {
    return {
      ...state,
      petugas: action.payload
    }
  }

  if(action.type === SET_PENJAMIN_PENJUALAN) {
    return {
      ...state,
      penjamin_penjualan: action.payload
    }
  }

  if(action.type === SET_PROFIL) {
    return {
      ...state,
      profil: action.payload
    }
  }

  if(action.type === SET_REKAM_MEDIK) {
    return {
      ...state,
      rekammedik: action.payload
    }
  }

  if(action.type === SET_TRANSAKSI_KAS) {
    return {
      ...state,
      transaksikas: action.payload
    }
  }

  if(action.type === SET_PERSEDIAAN) {
    return {
      ...state,
      persediaan: action.payload
    }
  }

  if(action.type === SET_PEMBAYARAN_PIUTANG) {
    return {
      ...state,
      pembayaranpiutangs: action.payload
    }
  }
  if(action.type === SET_PEMBAYARAN_HUTANG) {
    return {
      ...state,
      pembayaranhutangs: action.payload
    }
  }
  if(action.type === SET_PEMBELIAN) {
    return {
      ...state,
      pembelians: action.payload
    }
  }

  if(action.type === SET_TBS_PEMBELIAN) {
    return {
      ...state,
      tbs_pembelians: action.payload
    }
  }

  if(action.type === SET_PENJUALAN) {
    return {
      ...state,
      penjualans: action.payload
    }
  }

  if(action.type === SET_TBS_PENJUALAN) {
    return {
      ...state,
      tbs_penjualans: action.payload
    }
  }
  if(action.type === SET_PASIEN_REGISTRASI) {
    return {
      ...state,
      pasien_registrasi: action.payload
    }
  }

  if(action.type === SET_REGISTRASI) {
    return {
      ...state,
      registrasi: action.payload
    }
  }
  if(action.type === SET_POSISI_KAS) {
    return {
      ...state,
      posisikas: action.payload
    }
  }

  if(action.type === SET_KAS_MANUAL) {
    return {
      ...state,
      kas_manuals: action.payload
    }
  }
  if(action.type === SET_KAS_MUTASI) {
    return {
      ...state,
      kas_mutasis: action.payload
    }
  }
  if(action.type === SET_STOK_AWAL) {
    return {
      ...state,
      stok_awals: action.payload
    }
  }

  if(action.type === SET_STOK_OPNAME) {
    return {
      ...state,
      stok_opnames: action.payload
    }
  }

  if(action.type === SET_ITEM_MASUK) {
    return {
      ...state,
      item_masuks: action.payload
    }
  }

  if(action.type === SET_ITEM_KELUAR) {
    return {
      ...state,
      item_keluars: action.payload
    }
  }

  if(action.type === SET_PASIEN) {
    return {
      ...state,
      pasien: action.payload
    }
  }

  if(action.type === SET_KOMISI) {
    return {
      ...state,
      komisi: action.payload
    }
  }
  if(action.type === SET_KOMISI_PENJUALAN) {
    return {
      ...state,
      komisipenjualans: action.payload
    }
  }
  if(action.type === SET_PRODUK) {
    return {
      ...state,
      produk: action.payload
    }
  }

  if(action.type === SET_USERS) {
    return {
      ...state,
      users: action.payload
    }
  }

  if(action.type === SET_SUPPLIER) {
    return {
      ...state,
      supplier: action.payload
    }
  }
  if(action.type === SET_PENJAMIN) {
    return {
      ...state,
      penjamin: action.payload
    }
  }
  if(action.type === SET_KAS) {
    return {
      ...state,
      kas: action.payload
    }
  }

  if(action.type === SET_RUANGANS) {
    return {
      ...state,
      ruangan: action.payload
    }
  }

  if(action.type === SET_POLI) {
    return {
      ...state,
      poli: action.payload
    }
  }

  if(action.type === SET_KATEGORI_TRANSAKSI) {
    return {
      ...state,
      kategori_transaksi: action.payload
    }
  }

  if(action.type === ERROR) {
    return {...state, error: true }
  }

  if(action.type === LOADING) {
    return {...state, loading: true }
  }

  if(action.type === LOADING_FINISH) {
    return {...state, loading: false }
  }

  if(action.type === SET_SISWA) {
    return {
      ...state,
      siswa: action.payload
    }
  }


  return state
}

export default reducer
