import React from "react";
import FeedEntry from "../components/FeedEntry";

function Stats() {
  return (
    <section class="flex h-auto w-full bg-gray-100">

      {/* Main content container */}
      <section class="flex flex-col h-full w-2/3 px-5 items-center">
        {/* Welcome Alert */}
      <div className="alert alert-success shadow-lg mt-5 px-3">
        <div>
          <div>👋</div>
          <div>
            <h3 className="font-bold">Welcome to your user feed Bob!</h3>
            <div className="text-xs">You have 1 unread message</div>
          </div>
        </div>
      </div>
      {/* Welcome alert end */}
      <div className="flex items-start w-full mb-2">
        <h1 className="tracking-wide font-bold text-2xl prose mt-10">The latest from our blog</h1>
      </div>
      {/* Articles CArousel */}
      <div className="carousel w-full rounded-lg h-48">
        <div id="item1" className="carousel-item w-full relative">
          <img src="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="test" className="w-full object-none rounded-lg" />
          <div className="absolute bottom-0 right-0 bg-white p-3 bg-opacity-90 rounded-lg mb-2 mr-2">
            <p className="text-xl text-primary font-bold opacity-100">10 Reasons why you should learn python</p>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full relative">
          <img src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="test" className="w-full object-none rounded-lg" />
          <div className="absolute bottom-0 right-0 bg-white p-3 bg-opacity-90 rounded-lg mb-2 mr-2">
            <p className="text-xl text-primary font-bold opacity-100">Learn how to build a portfolio</p>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full relative">
          <img src="https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="test" className="w-full object-none rounded-lg" />
          <div className="absolute bottom-0 right-0 bg-white p-3 bg-opacity-90 rounded-lg mb-2 mr-2">
            <p className="text-xl text-primary font-bold opacity-100">Things to know before designing your database</p>
          </div>
        </div>
        <div id="item4" className="carousel-item w-full relative">
          <img src="https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="test" className="w-full object-none rounded-lg" />
          <div className="absolute bottom-0 right-0 bg-white p-3 bg-opacity-90 rounded-lg mb-2 mr-2">
            <p className="text-xl text-primary font-bold opacity-100">Asynchronous Programming Explained</p>
          </div>
        </div> 
        </div> 
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">1</a> 
          <a href="#item2" className="btn btn-xs">2</a> 
          <a href="#item3" className="btn btn-xs">3</a> 
          <a href="#item4" className="btn btn-xs">4</a>
        </div>
    {/* End articles carousel */}
      <div className="flex flex-col w-full">
        <FeedEntry />
        <FeedEntry />
        <FeedEntry />
        <FeedEntry />
        <FeedEntry />
        <FeedEntry />
      </div>
      </section>

      {/* Righht sidebar */}
      <section class="h-full w-1/3  sticky px-3">
        <ul className="menu bg-base-100 rounded-box w-full mt-5 shadow-lg">
          <li><a>Suggested Follows: </a></li>
          <li>
            {/* follow user 1 */}
            <a href="/"className="flex justify-between">
              <div className="flex gap-x-2 items-center">
                <div className="avatar flex items-center gap-x-3">
                  <div className="w-12 mask mask-squircle">
                    <img alt="test" src="https://images.pexels.com/photos/7829101/pexels-photo-7829101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  </div>
                </div>
                <div>
                  Hilora Dewitt
                </div>
              </div>
              <p className="btn">Follow</p>
            </a>
            </li>
          
          <li>
            {/* follow user 2 */}
            <a href="/"className="flex justify-between">
              <div className="flex gap-x-2 items-center">
                <div className="avatar flex items-center gap-x-3">
                  <div className="w-12 mask mask-squircle">
                    <img alt="test" src="https://images.pexels.com/photos/7829101/pexels-photo-7829101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  </div>
                </div>
                <div>
                  Hilora Dewitt
                </div>
              </div>
              <p className="btn">Follow</p>
            </a>
            </li>

            <li>
            {/* follow user 2 */}
            <a href="/"className="flex justify-between">
              <div className="flex gap-x-2 items-center">
                <div className="avatar flex items-center gap-x-3">
                  <div className="w-12 mask mask-squircle">
                    <img alt="test" src="https://images.pexels.com/photos/7829101/pexels-photo-7829101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  </div>
                </div>
                <div>
                  Hilora Dewitt
                </div>
              </div>
              <p className="btn">Follow</p>
            </a>
            </li>
        </ul>
      </section>
    </section>
  )
}

export default Stats;