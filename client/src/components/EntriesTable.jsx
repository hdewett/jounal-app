import React from 'react';
import Entry from './Entry';

export default function EntriesTable(props) {


  return (
  <div className="overflow-x-auto flex justify-center">
    <table className="table table-zebra w-2/3">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Date</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <Entry />
      </tbody>
    </table>
  </div>
  );
}