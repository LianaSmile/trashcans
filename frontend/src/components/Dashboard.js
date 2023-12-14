// Dashboard.js

import React, { useState, useEffect } from 'react';
import DistrictList from './DistrictList';
import TrashCanTable from './TrashCanTable';

const Dashboard = () => {
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [trashCans, setTrashCans] = useState([]);

  useEffect(() => {
    // Fetch districts data from your API
    fetch('http://127.0.0.1:8000/api/districts/')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched districts:', data);
        setDistricts(data);
        // Set "All" as the default selected district
        handleDistrictClick(null);
      })
      .catch((error) => console.error('Error fetching districts:', error));

    // Fetch all trash cans data initially
    fetch('http://127.0.0.1:8000/api/trashcans/')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched all trash cans:', data);
        setTrashCans(data);
      })
      .catch((error) => console.error('Error fetching trash cans:', error));
  }, []);

  const handleDistrictClick = (districtId) => {
    if (districtId === null) {
      // If "All" is selected, fetch all trash cans
      fetch('http://127.0.0.1:8000/api/trashcans/')
        .then((response) => response.json())
        .then((data) => {
          console.log('Fetched all trash cans:', data);
          setTrashCans(data);
        })
        .catch((error) => console.error('Error fetching trash cans:', error));
    } else {
      // Fetch trash cans for the selected district from your API
      fetch(`http://127.0.0.1:8000/api/districts/${districtId}/trashcans/`)
        .then((response) => response.json())
        .then((data) => {
          console.log(`Fetched trash cans for district ${districtId}:`, data);
          setTrashCans(data);
        })
        .catch((error) => console.error('Error fetching trash cans for district:', error));
    }

    setSelectedDistrict(districtId);
  };

  return (
    <div>
      <DistrictList districts={districts} onDistrictClick={handleDistrictClick} />
      {selectedDistrict !== null && (
        <TrashCanTable trashCans={trashCans} />
      )}

      {selectedDistrict == null && (
        <TrashCanTable trashCans={trashCans} />
      )}
    </div>
  );
};

export default Dashboard;
