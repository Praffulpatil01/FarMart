import { color } from 'chart.js/helpers';
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [users, setUsers] = useState(0);
  const [sessions, setSessions] = useState(0);
  const [signups, setSignups] = useState(0);
  const [revenue, setRevenue] = useState(0);

  const finalValues = {
    users: 50151,
    sessions: 536,
    signups: 145814,
    revenue: 1531515321,
  };

  useEffect(() => {
    const duration = 5000; // 5 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;

    const countUp = (setState, finalValue) => {
      let currentStep = 0;
      const increment = finalValue / steps;

      const counter = setInterval(() => {
        currentStep++;
        setState((prev) => Math.min(finalValue, prev + increment));

        if (currentStep >= steps) {
          clearInterval(counter);
        }
      }, interval);
    };

    countUp(setUsers, finalValues.users);
    countUp(setSessions, finalValues.sessions);
    countUp(setSignups, finalValues.signups);
    countUp(setRevenue, finalValues.revenue);
  }, []);

  // State for hover effect
  const [hovered, setHovered] = useState(null);

  return (
    <div style={styles.dashboard}>
      <h2>Dashboard</h2>
      <div style={styles.widgets}>
        <div
          style={hovered === 'users' ? { ...styles.widget, ...styles.widgetHovered } : styles.widget}
          onMouseEnter={() => setHovered('users')}
          onMouseLeave={() => setHovered(null)}
        >
          <h3>Total Users</h3>
          <p>{Math.floor(users)}</p>
          <canvas data-testid="canvas" height="70" width="266" style={styles.canvas}></canvas>
        </div>
        <div
          style={hovered === 'sessions' ? { ...styles.widget, ...styles.widgetHovered } : styles.widget}
          onMouseEnter={() => setHovered('sessions')}
          onMouseLeave={() => setHovered(null)}
        >
          <h3>Active Sessions</h3>
          <p>{Math.floor(sessions)}</p>
          <canvas data-testid="canvas" height="70" width="266" style={styles.canvas}></canvas>
        </div>
        <div
          style={hovered === 'signups' ? { ...styles.widget, ...styles.widgetHovered } : styles.widget}
          onMouseEnter={() => setHovered('signups')}
          onMouseLeave={() => setHovered(null)}
        >
          <h3>New Signups</h3>
          <p>{Math.floor(signups)}</p>
          <canvas data-testid="canvas" height="70" width="266" style={styles.canvas}></canvas>
        </div>
        <div
          style={hovered === 'revenue' ? { ...styles.widget, ...styles.widgetHovered } : styles.widget}
          onMouseEnter={() => setHovered('revenue')}
          onMouseLeave={() => setHovered(null)}
        >
          <h3>Revenue</h3>
          <p>₹{Math.floor(revenue)}</p>
          <canvas data-testid="canvas" height="70" width="266" style={styles.canvas}></canvas>
        </div>
      </div>
    </div>
  );
};

const styles = {
  dashboard: {
    marginTop: '20px',
  },
  widgets: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    flexWrap: 'wrap',
  },
  widget: {
    flex: '1 1 200px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#66c566',
    textAlign: 'left',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    border: '1px solid #ddd',
    cursor: 'pointer',
    color: '#fff',
    position: 'relative',
  },
  widgetHovered: {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  canvas: {
    position: 'absolute',
    bottom: '10px', 
    transform: 'translateX(-50%)',
    width: '80%', 
    height: 'auto',
  },
};

export default Dashboard;
