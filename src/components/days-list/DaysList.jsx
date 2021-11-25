import React from 'react';
import DayInfo from './day-info/DayInfo';
import './style.scss';

export default function DaysList() {
  let fakeData = [1, 2, 3, 4, 5];
  return (
    <div className="list-content">
      {fakeData.map((item, index) => (
        <DayInfo key={item} />
      ))}
    </div>
  );
}
