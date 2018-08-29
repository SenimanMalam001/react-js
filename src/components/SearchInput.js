import React from 'react';


const SearchInput = (props) => {
  const { query, handleChange} = props
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Masukkan Pencarian Disini"
        name="query"
        value={query}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchInput
