import instance from '../../utils/instance';
import { hideLoader, showLoader } from '../app/app-actions';
import {
  setCountries,
  setCovidData,
  setRecoveredCardData,
} from './data-actions';

export function fetchCountries() {
  return (dispatch) => {
    instance
      .get('countries')
      .then((response) => {
        dispatch(setCountries(response.data));
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        dispatch(hideLoader());
      });
  };
}
export function fetchDataByCountry(country) {
  return (dispatch) => {
    dispatch(showLoader());
    instance
      .get(`total/dayone/country/${country}`)
      .then((response) => {
        console.log('111111111', response.data);
        let dataList = response?.data?.slice(
          Math.max(response.data.length - 5, 1)
        );
        dispatch(setRecoveredCardData(response.data));
        dispatch(setCovidData(dataList));
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        dispatch(hideLoader());
      });
  };
}
