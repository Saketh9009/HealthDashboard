import './UpcomingSchedule.css';
import { appointments } from '../../data/appointments';
import { Clock, Calendar } from 'lucide-react';

const UpcomingSchedule = () => {
  return (
    <section className="section">
      <h2 className="title">Upcoming Schedule</h2>
      <div className="schedule-list">
        {appointments.upcoming.map(day => (
          <div className="day-group" key={day.id}>
            <h3 className="day-header">On {day.day}</h3>
            <div className='appoint'>
            {day.appointments.map(appointment => (
              <div className="appointment-card-up" key={appointment.id}>
                <div className="icon-wrapper">
                  <Calendar size={20} />
                </div>
                <div className="appointment-info">
                  <div className="title">{appointment.title}</div>
                  <div className="time">
                    <Clock size={16} />
                    {appointment.time}
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingSchedule; 