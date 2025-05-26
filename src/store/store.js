import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slices/uiSlice';
import healthReducer from './slices/healthSlice';
import appointmentReducer from './slices/appointmentSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    health: healthReducer,
    appointments: appointmentReducer,
  },
}); 