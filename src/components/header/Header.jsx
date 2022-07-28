import React from 'react'
import { header } from '../../porfolio'

const Header = () => {
    const {homepage, title } = header
  return (
    <div className='header'>
    <a href={homepage} target="_blank">{title}</a>

    </div>
  )
}

export default Header