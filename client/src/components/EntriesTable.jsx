import React from 'react';
import Entry from './Entry';

export default function EntriesTable(props) {


  return (
  <div className="overflow-x-auto">
    <table className="table table-zebra w-full">
      <thead>
        <tr clasName="flex justify-around">
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