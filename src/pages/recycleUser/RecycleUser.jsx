import React from 'react'
import './RecycleUser.css'
import BreadCrum from '../../component/breadcrum/BreadCrum'
import RecycleUserTable from '../../component/recycleUserTable/RecycleUserTable'

const RecycleUser = () => {
  return (
    <>
    <section className='aw_recycle_users'>
        <div className='container-fluid'>
            <div className='row aw_recycle_top_user'>
                <BreadCrum 
                pageName="Users"
                currentPage="User"
                />
            </div>
            <div className='row'>
                <RecycleUserTable/>
            </div>

        </div>
    </section>
    </>
  )
}

export default RecycleUser