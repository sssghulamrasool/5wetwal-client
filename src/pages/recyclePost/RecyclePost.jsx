import React from 'react'
import './RecyclePost.css';
import BreadCrum from '../../component/breadcrum/BreadCrum'
import RecyclePostTable from '../../component/recyclePostTable/RecyclePostTable';

const RecyclePost = () => {
  
  return (
    <>
    <section className='aw_recycle_post'>
        <div className='container-fluid'>
            <div className='row aw_recycle_post_top'>
                <BreadCrum
                pageName="Posts"
                currentPage="Posts"
                />
            </div>
            <div className='row'>
                <RecyclePostTable/>
            </div>
        </div>
    </section>
    </>
  )
}

export default RecyclePost