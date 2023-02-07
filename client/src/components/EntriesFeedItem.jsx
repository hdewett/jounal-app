import React from 'react';
import DeleteEntry from './DeleteEntry';

export default function Entry(props) {


  return (
    <>
    <tr className="cursor-pointer">
      <th>{props.id}</th>
      <td>{props.title}</td>
      <td>{props.date}</td>
      <td>{props.body}</td>
      <td>{props.entry}</td>
      <td>{props.hours}</td>
      <td>{props.language}</td>
      <td>{props.framework}</td>
      <td>{props.notes}</td>
    
    
    </tr>
  </>
  );
}