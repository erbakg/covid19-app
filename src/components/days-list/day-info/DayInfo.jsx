import React from 'react'
import './style.scss'
import moment from 'moment'

export default function DayInfo({item}) {
  return (
    <div className='item_content'>
      <p className='item-date'>{moment(item.Date).format('DD MMMM')}</p>
      <div className='item_info-box'>
        <div className='item_info-box_half-side margin'>
          <p>Active</p>
          <span>{item.Active}</span>
        </div>
        <div className='item_info-box_half-side'>
          <p>Deaths</p>
          <span>{item.Deaths}</span>
        </div>
        <div className='item_info-box_half-side margin'>
          <p>Confirmed</p>
          <span>{item.Confirmed}</span>
        </div>
        <div className='item_info-box_half-side'>
          <p>Recovered</p>
          <span>{item.Recovered}</span>
        </div>
      </div>
    </div>
  )
}
