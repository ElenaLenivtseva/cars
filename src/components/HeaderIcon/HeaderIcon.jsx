import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderIcon.scss'

const HeaderIcon = ({children, link}) => {
  return (
    <div className='header-icon header-icon__wrap'>
            <Link to={link}>
              {children}
            </Link>
          </div>
  )
}

export default HeaderIcon
