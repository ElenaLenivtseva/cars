import React from 'react'
import News from '../../components/News/News'
import NavigatePanel from '../../components/NavigatePanel/NavigatePanel'
import Pagination from '../../components/Pagination/Pagination'

const NewsPage = () => {
  return (
    <div className='container'>
      <NavigatePanel page='Main Page' title='Новости и анонсы'/>
      <News/>
      <Pagination/>
    </div>
  )
}

export default NewsPage
