import {
  SET_COUNTRIES,
  SET_COVID_DATA,
  SET_RECOVERED_CARD_DATA,
  SET_SELECTED_COUNTRY,
} from './data-types';

const initialState = {
  countries: [],
  selectedCountry: 'Kyrgyzstan',
  covidData: [],
  topRecoveredDayCard: '',
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case SET_SELECTED_COUNTRY:
      return {
        ...state,
        selectedCountry: action.payload,
      };
    case SET_COVID_DATA:
      return {
        ...state,
        covidData: action.payload,
      };
    case SET_RECOVERED_CARD_DATA:
      return {
        ...state,
        topRecoveredDayCard: action.payload,
      };
    default:
      return state;
  }
}
