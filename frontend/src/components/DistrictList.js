import React from 'react';

const DistrictList = ({ districts, onDistrictClick, showAll }) => {
  return (
    <div>
      <h2>Districts</h2>
      <ul>
        <li key="all" onClick={() => onDistrictClick(null)}>
          All
        </li>
        {districts.map((district) => (
          <li key={district.id} onClick={() => onDistrictClick(district.id)}>
            {district.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DistrictList;
