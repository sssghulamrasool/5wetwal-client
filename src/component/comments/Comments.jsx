import React from 'react'
import BreadCrum from '../breadcrum/BreadCrum'
import Commentstable from '../commentsTable/CommentsTable';
import './Comments.css';
const Comments = () => {
  return (
    <>
    <section className='aw_comments'>
        <div className='container-fluid'>
            <div className='row aw_comments_top'>
                <BreadCrum
                pageName="Comments"
                currentPage="Comments"
                />
            </div>
            <div className='row'>
            <Commentstable/>
            </div>

        </div>
    </section>
    </>
  )
}

export default Comments