import React, { useEffect, useState } from 'react';
import DayInfo from './day-info/DayInfo';
import './style.scss';

export default function DaysList() {
  const [dataList, setDataList] = useState();

  useEffect(() => {
    getSavedData();
  }, []);

  const getSavedData = async () => {
    const savedData = JSON.parse(localStorage.getItem('savedCovidData'));
    setDataList(savedData);
  };

  return (
    <div className="list-content">
      {dataList?.map((item) => (
        <DayInfo key={item.Date} item={item} />
      ))}
    </div>
  );
}
