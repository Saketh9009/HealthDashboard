import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  statusCards: [
    {
      id: 1,
      title: 'Heart Rate',
      value: 72,
      status: 'Good',
      icon: 'Heart',
    },
    {
      id: 2,
      title: 'Blood Pressure',
      value: 120,
      status: 'Excellent',
      icon: 'Activity',
    },
    {
      id: 3,
      title: 'Oxygen Level',
      value: 98,
      status: 'Excellent',
      icon: 'Wind',
    },
    {
      id: 4,
      title: 'Sleep Quality',
      value: 85,
      status: 'Good',
      icon: 'Moon',
    },
  ],
};

const healthSlice = createSlice({
  name: 'health',
  initialState,
  reducers: {
    updateHealthStatus: (state, action) => {
      const { id, value, status } = action.payload;
      const card = state.statusCards.find(card => card.id === id);
      if (card) {
        card.value = value;
        card.status = status;
      }
    },
  },
});

export const { updateHealthStatus } = healthSlice.actions;
export default healthSlice.reducer; 