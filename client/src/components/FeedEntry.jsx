import React from 'react';
import { Link } from 'react-router-dom';

export default function FeedEntry(props) {

  return(
    <div className="card w-full bg-base-100 shadow-xl mt-5">
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.notes}</p>
        <div className="flex items-center card-actions justify-between mt-5">
        
        <div className="flex gap-x-2">
        <div className="avatar flex items-center gap-x-3">
          <div className="w-12 mask mask-squircle">
            <img alt="test" src={props.avatar_img} />
          </div>
        </div>
          <div className="">
            <p>{props.name}</p>
            <p>{props.date}</p>
          </div>
        </div>
        <div className="flex gap-x-5 items-center">
        <div className="flex flex-col items-center">
        <p className="text-sm">Viewed by</p>
        <div className="avatar-group -space-x-6">
          <div className="avatar">
            <div className="w-10">
              <img alt="test" src="https://i.pinimg.com/564x/da/9a/34/da9a346fe6e5276526ccb98a9d6c573e.jpg" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <img alt="test" src="https://i.pinimg.com/564x/4b/b8/55/4bb855f9cdd38792ebfbfb79066811e5.jpg" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <img alt="test" src="https://i.pinimg.com/564x/88/72/2d/88722d7f72e2ca3e54dacf0499b1dd46.jpg" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <img alt="test" src="https://i.pinimg.com/564x/95/6e/f6/956ef678452e055ec407e87a34287e6f.jpg" />
            </div>
          </div>
        </div>
        </div>

        <Link to={`/viewentry/` + props.id}className="btn btn-primary">Read</Link>
        </div>
        </div>
      </div>
    </div>
  );
}