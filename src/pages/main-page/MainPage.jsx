import React from 'react';
import DaysList from '../../components/days-list/DaysList';
import RecoveredCard from '../../components/recovered-card/RecoveredCard';
import Dropdown from '../../components/dropdown/Dropdown';
import './style.scss'

export default function MainPage() {
  return (
    <div className='main-page_content'>
      <Dropdown />
      <div className='main-page_middle-section'>
        <DaysList />
        <RecoveredCard />
      </div>
    </div>
  );
}
