import React from "react";

export default function DeleteEntry(props) {

  return (
    <>
      <input type="checkbox" id={'my-modal-' + props.id} className="modal-toggle" />
      <label htmlFor={'my-modal-' + props.id} className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">Are you sure you want to delete this entry?</h3>
          <p className="py-4">This action is permanent.</p>
          <div className="w-full flex justify-end">
            <button onClick={() => props.handleDelete(props.id)} className="btn btn-error">Delete</button>
          </div>
        </label>
      </label>
    </>
  );


}