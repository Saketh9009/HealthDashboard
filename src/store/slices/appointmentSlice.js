import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appointments: [
    {
      id: 1,
      title: 'Dr. Sarah Wilson',
      type: 'Cardiology',
      time: '10:00 AM',
      date: '2024-03-20',
      status: 'upcoming',
    },
    {
      id: 2,
      title: 'Dr. Michael Brown',
      type: 'Dermatology',
      time: '2:30 PM',
      date: '2024-03-21',
      status: 'upcoming',
    },
    {
      id: 3,
      title: 'Dr. Emily Chen',
      type: 'General Checkup',
      time: '11:15 AM',
      date: '2024-03-22',
      status: 'upcoming',
    },
  ],
};

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    addAppointment: (state, action) => {
      state.appointments.push(action.payload);
    },
    updateAppointment: (state, action) => {
      const { id, ...updates } = action.payload;
      const appointment = state.appointments.find(apt => apt.id === id);
      if (appointment) {
        Object.assign(appointment, updates);
      }
    },
    deleteAppointment: (state, action) => {
      state.appointments = state.appointments.filter(apt => apt.id !== action.payload);
    },
  },
});

export const { addAppointment, updateAppointment, deleteAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer; 