
import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        console.log('Fetched activities:', results);
        console.log('API endpoint:', apiUrl);
      });
  }, [apiUrl]);

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h2 className="card-title mb-3 text-primary">Activities</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>User</th>
              <th>Team</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, idx) => (
              <tr key={idx}>
                <td>{activity.name}</td>
                <td>{activity.user?.username || activity.user}</td>
                <td>{activity.team?.name || activity.team}</td>
                <td>{activity.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Activities;
