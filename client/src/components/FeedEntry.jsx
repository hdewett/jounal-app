import React from 'react';

export default function FeedEntry() {

  return(
    <div className="card w-full bg-base-100 shadow-xl mt-5">
      <div className="card-body">
        <h2 className="card-title">Journal Entry</h2>
        <p>Maybe we can put the notes entries somewhere in here?</p>
        <div className="flex items-center card-actions justify-between mt-5">
        
        <div className="flex gap-x-2">
        <div className="avatar flex items-center gap-x-3">
          <div className="w-12 mask mask-squircle">
            <img alt="test" src="https://images.pexels.com/photos/7829101/pexels-photo-7829101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
        </div>
          <div className="">
            <p>Ethan Steip</p>
            <p>posted 2 days ago</p>
          </div>
        </div>
        <div className="flex gap-x-2 items-center">
        <div className="flex flex-col items-center">
        <p className="text-sm">Viewed by</p>
        <div className="avatar-group -space-x-6">
          <div className="avatar">
            <div className="w-10">
              <img alt="test" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJQ3rjXSvesLZphk0OgByBxsDvdKgbYw-SA&usqp=CAU" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <img alt="test" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6wbnOyR5aZXP-7M2ldQuZIthlbJa4r2_wJQ&usqp=CAU" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <img alt="test" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOY3vfGC7wrdknrJ85nxEUPoaNI1JxcbtT81VehTWdBBVYMh75ReKyj_am5I3_6TLBoZU&usqp=CAU" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <img alt="test" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tZdrO7QpL6uFJ7XhnxNBAnXrmk-CaZUMCA&usqp=CAU" />
            </div>
          </div>
        </div>
        </div>

        <button className="btn btn-primary">Read</button>
        </div>
        </div>
      </div>
    </div>
  );
}