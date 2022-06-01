import React from 'react'
import './list.scss'
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from '../../Components/navbar/Navbar'
import Datatable from '../../Components/datatable/Datatable'
export default function List() {
  return (
    <div className="list">
      <Sidebar />
        <div className="listContainer">
          <Navbar />
          <Datatable />
        </div>
    </div>
  )
}
