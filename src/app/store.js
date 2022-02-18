import { configureStore } from '@reduxjs/toolkit';
import listSliceReducer from "../features/listSlice.js";
import filtersSliceReducer from '../components/filtersSlice.js';

export default configureStore({
  reducer: {
    listSlice: listSliceReducer,
    filtersSlice: filtersSliceReducer,
  },
});