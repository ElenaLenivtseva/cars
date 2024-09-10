import React from 'react'
import News from '../../components/News/News'
import NavigatePanel from '../../components/NavigatePanel/NavigatePanel'

const NewsPage = () => {
  return (
    <div className='container'>
      <NavigatePanel/>
      <News/>
    </div>
  )
}

export default NewsPage
