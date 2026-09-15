import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const selectStorms = (state: RootState) => state.storm.storms;
