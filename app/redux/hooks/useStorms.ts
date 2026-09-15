import { useSelector } from 'react-redux';
import { selectStorms } from '../selectors/stormsSelector'

export const useStorms = () => {
  const storms = useSelector(selectStorms)
  return { storms }
}