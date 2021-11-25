import React from 'react';
import './style.scss';
import ArrowIcon from './../../svgs/dropdown-arrow.svg';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSelectedCountry } from '../../redux/data/data-actions';
import { fetchDataByCountry, } from '../../redux/data/data-thunks';

export default function Dropdown({ openDropdown, setOpenDropDown }) {
  const countriesList = useSelector((state) => state.data.countries);
  const selectedCountry = useSelector((state) => state.data.selectedCountry);
  const storagedCountry = localStorage.getItem('selectedCountry');

  const dispatch = useDispatch();

  const itemClickHandler = (item) => {
    dispatch(setSelectedCountry(item.Country));
    dispatch(fetchDataByCountry(item.Slug));
    setOpenDropDown(false);
  };

  return (
    <div className="dropdown">
      <div
        className="dropdown_button"
        onClick={() => setOpenDropDown(!openDropdown)}
      >
        <p>{storagedCountry !== null ? storagedCountry : selectedCountry}</p>
        <img src={ArrowIcon} alt="icon" className="dropdown_arrow-icon" />
      </div>

      {openDropdown && (
        <div
          className="dropdown_content"
          onPointerLeave={() => setOpenDropDown(false)}
        >
          {countriesList &&
            countriesList?.map((item) => (
              <div
                onClick={() => itemClickHandler(item)}
                key={item.Slug}
                className="dropdown_item"
              >
                {item.Country}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
