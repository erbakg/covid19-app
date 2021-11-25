import React, { useEffect, useState } from 'react';
import DaysList from '../../components/days-list/DaysList';
import RecoveredCard from '../../components/recovered-card/RecoveredCard';
import Dropdown from '../../components/dropdown/Dropdown';
import './style.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  fetchCountries,
  fetchDataByCountry,
} from '../../redux/data/data-thunks';

export default function MainPage() {
  const [openDropdown, setOpenDropDown] = useState(false);

  const loader = useSelector((state) => state.app.loader);
  const savedData = localStorage.getItem('savedCovidData');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
    if (savedData === null) {
      dispatch(fetchDataByCountry('kyrgyzstan'));
    }
  }, [dispatch]);

  if (loader) {
    return (
      <div className="loader">
        <div className="lds-circle">
          <div></div>
        </div>
      </div>
    );
  }
  return (
    <div className="main-page_content">
      <Dropdown openDropdown={openDropdown} setOpenDropDown={setOpenDropDown} />
      <div className="main-page_middle-section">
        <DaysList />
        <RecoveredCard />
      </div>
    </div>
  );
}
