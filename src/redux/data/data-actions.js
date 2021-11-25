import {
  SET_COUNTRIES,
  SET_COVID_DATA,
  SET_RECOVERED_CARD_DATA,
  SET_SELECTED_COUNTRY,
} from './data-types';

export const setCountries = (countries) => {
  return {
    type: SET_COUNTRIES,
    payload: countries,
  };
};

export const setSelectedCountry = (country) => {
  localStorage.setItem('selectedCountry', country);
  return {
    type: SET_SELECTED_COUNTRY,
    payload: country,
  };
};

export const setCovidData = (data) => {
  localStorage.setItem('savedCovidData', JSON.stringify(data));
  return {
    type: SET_COVID_DATA,
    payload: data,
  };
};

export const setRecoveredCardData = (data) => {
  let topDay = findTopDay(data);

  return {
    type: SET_RECOVERED_CARD_DATA,
    payload: topDay,
  };
};

const findTopDay = (days) => {
  let fiveDays = days.slice(Math.max(days.length - 5, 1));
  let halfYear = days.slice(Math.max(days.length - 180, 1));
  let max = fiveDays.reduce((acc, curr) =>
    acc.Recovered > curr.Recovered ? acc : curr
  );

  if (max.Recovered === 0) {
    max = halfYear.reduce((acc, curr) =>
      acc.Recovered > curr.Recovered ? acc : curr
    );
  } else {
    max = halfYear[180];
  }

  localStorage.setItem('topRecoveredCard', JSON.stringify(max));

  return max;
};
