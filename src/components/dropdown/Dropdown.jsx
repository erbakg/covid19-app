import React from 'react'
import './style.scss'
import ArrowIcon from './../../svgs/dropdown-arrow.svg'

export default function Dropdown() {
  return (
    <div className='dropdown_content'>
      <p className='dropdown_text'>Kyrygzstan</p>
      <img src={ArrowIcon} alt="icon" className='dropdown_arrow-icon' />
    </div>
  )
}
