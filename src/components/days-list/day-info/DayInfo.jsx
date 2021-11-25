import React from 'react'
import './style.scss'

export default function DayInfo() {
  return (
    <div className='item_content'>
      <p className='item-date'>26 June</p>
      <div className='item_info-box'>
        <div className='item_info-box_half-side margin'>
          <p>Active</p>
          <span>4204</span>
        </div>
        <div className='item_info-box_half-side'>
          <p>Deaths</p>
          <span>4204</span>
        </div>
        <div className='item_info-box_half-side margin'>
          <p>Confirmed</p>
          <span>4204</span>
        </div>
        <div className='item_info-box_half-side'>
          <p>Recovered</p>
          <span>4204</span>
        </div>
      </div>
    </div>
  )
}
