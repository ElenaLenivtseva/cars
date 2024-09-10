import React from 'react'
import News from '../../components/News/News'
import NavigatePanel from '../../components/NavigatePanel/NavigatePanel'
import Pagination from '../../components/Pagination/Pagination'

const NewsPage = () => {
  return (
    <div className='container'>
      <NavigatePanel/>
      <News/>
      <Pagination/>
    </div>
  )
}

export default NewsPage
