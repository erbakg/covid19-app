import React, { useEffect, useState } from 'react';
import './style.scss';
import moment from 'moment';

export default function RecoveredCard() {
  const [data, setData] = useState();
  useEffect(() => {
    getSavedData();
  }, []);

  const getSavedData = async () => {
    const savedData = JSON.parse(localStorage.getItem('topRecoveredCard'));
    setData(savedData);
  };

  console.log('33333333', data);

  return (
    <div className="recovered-card">
      <p className="recovered-card_top-text">Top recovered cases</p>
      {data && (
        <>
          <p className="recovered-card_middle-text">{data.Recovered}</p>
          <p className="recovered-card_bottom-text">
            {moment(data.Date).format('DD MMMM')}
          </p>
        </>
      )}
    </div>
  );
}
