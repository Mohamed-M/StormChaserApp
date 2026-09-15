import { useSelector } from 'react-redux';
import { selectStatus, selectWeather } from '../selectors/weatherSelector';

export const useWeather = () => {
  const weather = useSelector(selectWeather)
  const status = useSelector(selectStatus)
  return { weather, status }
}