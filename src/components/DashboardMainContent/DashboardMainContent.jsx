import './DashboardMainContent.css';
import AnatomySection from '../AnatomySection/AnatomySection';
import HealthStatusCards from '../HealthStatusCards/HealthStatusCards';
import CalendarView from '../CalendarView/CalendarView';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';
import ActivityCard from '../ActivityCard/ActivityCard';

const DashboardMainContent = () => {
  return (
    <main className="main-content">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-grid">
        <div className="dashboard-left-column">
          <div className="anatomy-section-container">
            <div className="anatomy-section">
              <AnatomySection />
            </div>
            <div className="health-status-section">
              <HealthStatusCards />
            </div>
          </div>
          <div className="activity-section">
            <ActivityCard />
          </div>
        </div>
        <div className="dashboard-right-column">
          <div className="calendar-section">
            <CalendarView />
          </div>
          <div className="schedule-section">
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent; 