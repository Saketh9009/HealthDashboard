import './ActivityCard.css';

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
// Each day: [gray, cyan, purple] heights
const barData = [
  [38, 60, 48],
  [55, 32, 44],
  [40, 28, 60],
  [50, 38, 55],
  [70, 65, 80],
  [32, 44, 38],
  [48, 40, 55],
];
const barColors = [
  'linear-gradient(180deg, #E0E5F2 60%, #E0E5F2 100%)', // gray
  'linear-gradient(180deg, #00d9f5 60%, #b1c6f9 100%)', // cyan
  'linear-gradient(180deg, #5f5fff 60%, #b1c6f9 100%)', // purple
];

const ActivityCard = () => {
  return (
    <section className="card-activity">
      <div className="top-row">
        <h3 className="title">Activity</h3>
        <div className="subtitle">3 appointment on this week</div>
      </div>
      <div className="chart-wrapper">
        {barData.map((bars, idx) => (
          <div className="bar-group" key={days[idx]}>
            {bars.map((height, i) => (
              <div key={i} className="bar" style={{ height: `${height + 20}px`, background: barColors[i] }} />
            ))}
          </div>
        ))}
      </div>
      <div className="days-row">
        {days.map((d) => (
          <span key={d} className="day-label">{d}</span>
        ))}
      </div>
    </section>
  );
};

export default ActivityCard; 