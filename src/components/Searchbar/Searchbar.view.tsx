import React from 'react'
import * as FaIcons from 'react-icons/fa'
import './Searchbar.scss'

const Searchbar: React.FC = () => {
  return (
    <div className="input-group ">
        <button className="btn btn-secondary"><FaIcons.FaSearch/></button>
        <input type="text" className="input-control border border-secondary rounded-end" id="search"/>
    </div>
  )
}

export default Searchbar