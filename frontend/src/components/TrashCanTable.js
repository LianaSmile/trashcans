// TrashCanTable.js

import React from 'react';

const TrashCanTable = ({ trashCans }) => {
  return (
    <div>
      <h2>Trash Cans</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Address</th>
            <th>District</th>
            <th>Is Full</th>
            <th>Fullness Weight</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {trashCans.map((trashCan) => (
            <tr key={trashCan.id}>
              <td>{trashCan.id}</td>
              <td>{trashCan.address}</td>
              <td>{trashCan.district.name}</td>
              <td>{trashCan.is_full ? 'Full' : 'Empty'}</td>
              <td>{trashCan.fullness_weight}</td>
              <td>{trashCan.updated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrashCanTable;
