import './CalendarView.css';
import { appointments } from '../../data/appointments';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const timeSlots = [
  '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'
];

// Color coding for appointment types
const typeColors = {
  checkup: '#3a86ff',
  ophthalmology: '#5f5fff',
  cardiology: '#ff4d6d',
  neurology: '#00b894',
  dentist: '#00b4d8',
  physiotherapy: '#43aa8b',
  default: '#44419e',
};

// Helper to get the start of the week (Monday)
function getStartOfWeek(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is Sunday
  return new Date(d.setDate(diff));
}

// Helper to convert 'HH:MM' to minutes
function timeToMinutes(t) {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
}

const CalendarView = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selected, setSelected] = useState({ dayIdx: null, timeIdx: null });
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Get the start of the current week
  const weekStart = getStartOfWeek(currentDate);
  // Build array of dates for the week
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    return d;
  });

  // Find appointment for a given day and time
  const getAppointment = (date, time) => {
    return appointments.calendar.appointments.find(
      apt => date.getDate() === apt.date && apt.time === time
    );
  };

  const handlePrevWeek = () => {
    const prev = new Date(currentDate);
    prev.setDate(currentDate.getDate() - 7);
    setCurrentDate(prev);
    setSelected({ dayIdx: null, timeIdx: null });
    setSelectedAppointment(null);
  };

  const handleNextWeek = () => {
    const next = new Date(currentDate);
    next.setDate(currentDate.getDate() + 7);
    setCurrentDate(next);
    setSelected({ dayIdx: null, timeIdx: null });
    setSelectedAppointment(null);
  };

  const handleToday = () => {
    setCurrentDate(new Date());
    setSelected({ dayIdx: null, timeIdx: null });
    setSelectedAppointment(null);
  };

  const handleSlotClick = (dayIdx, timeIdx, apt) => {
    setSelected({ dayIdx, timeIdx });
    if (apt) setSelectedAppointment(apt);
    else setSelectedAppointment(null);
  };

  const formatWeekRange = () => {
    const start = weekDates[0];
    const end = weekDates[6];
    return `${start.toLocaleString('default', { month: 'long' })} ${start.getDate()} - ${end.getDate()}, ${start.getFullYear()}`;
  };

  // Get today's index in the week
  const today = new Date();
  const todayIdx = weekDates.findIndex(d => d.toDateString() === today.toDateString());

  return (
    <section className="section">
      <h2 className="title">Calendar</h2>
      <div className="month-header">
        <button className="navigation-button" onClick={handlePrevWeek} aria-label="Previous week">
          <ChevronLeft size={20} />
        </button>
        <h3>{formatWeekRange()}</h3>
        <button className="navigation-button" onClick={handleNextWeek} aria-label="Next week">
          <ChevronRight size={20} />
        </button>
        <button className="today-button" onClick={handleToday} aria-label="Go to today">Today</button>
      </div>
      <div className="pill-calendar">
        <div className="pill-row pill-header">
          <div className="pill-time-col"></div>
          {weekDays.map((day, idx) => (
            <div className={`pill-day-col${todayIdx === idx ? ' today' : ''}`} key={day}>
              <div className="pill-day-label">{day}</div>
              <div className="pill-date-label">{weekDates[idx].getDate()}</div>
              {todayIdx === idx && <div className="today-dot" aria-label="Today"></div>}
            </div>
          ))}
        </div>
        {timeSlots.map((time, timeIdx) => (
          <div className="pill-row" key={time}>
            <div className="pill-time-col">{time}</div>
            {weekDates.map((date, dayIdx) => {
              const apt = getAppointment(date, time);
              const isSelected = selected.dayIdx === dayIdx && selected.timeIdx === timeIdx;
              const isPast = date < today || (date.toDateString() === today.toDateString() && time < today.toTimeString().slice(0,5));
              let color = apt && apt.type ? typeColors[apt.type] || typeColors.default : undefined;
              return (
                <div
                  key={`pill-${dayIdx}-${timeIdx}`}
                  className={`pill-slot${apt ? ' has-appointment' : ''}${isSelected ? ' selected' : ''}${todayIdx === dayIdx ? ' today' : ''}${isPast ? ' past' : ''}`}
                  style={apt ? { '--apt-color': color } : {}}
                  onClick={() => handleSlotClick(dayIdx, timeIdx, apt)}
                  role="button"
                  tabIndex={0}
                  aria-label={apt ? `${apt.title} at ${apt.time}${apt.doctor ? ' with ' + apt.doctor : ''}` : `Empty slot at ${time}`}
                >
                  {apt ? (
                    <div className="pill-apt-mark" style={{ background: color }}></div>
                  ) : null}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="appointments-list">
        {selectedAppointment ? (
          <div className="appointment-card selected-detail">
            <div className="time">{selectedAppointment.time}{selectedAppointment.endTime ? `-${selectedAppointment.endTime}` : ''}</div>
            <div className="title">{selectedAppointment.title} {selectedAppointment.emoji}</div>
            {selectedAppointment.doctor && <div className="doctor">{selectedAppointment.doctor}</div>}
            {selectedAppointment.description && <div className="desc">{selectedAppointment.description}</div>}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default CalendarView; 