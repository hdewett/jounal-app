import React from 'react';

export default function HomePage() {

  return(
    <section className="flex h-auto w-screen flex-col items-center" data-theme="emerald" >
  <nav class="flex h-auto w-full items-center justify-between py-2 px-5">
    <div>
      <h1 className="text-3xl font-bold text-emerald-400">&lt;Codeful/&gt;</h1>
    </div>
    <div>
      <div class="flex items-center gap-x-5 tracking-wide">
        <a href="/" className="cursor-pointer">About</a>
        <a href="/" className="cursor-pointer">Resources</a>
        <a href="/" className="cursor-pointer rounded-full border border-primary px-5 py-2 transition duration-200 ease-in-out hover:bg-emerald-400 hover:text-white">View Dashboard</a>
      </div>
    </div>
  </nav>
  <div class="flex w-full items-center justify-center">
    <section className="bg-[url('../public/images/Codeful-hero-svg.svg')] px-10 h-[800px] max-w-[1100px] w-full flex justify-start items-center bg-cover">
      <div className="w-1/2">
      <h2 className="text-5xl font-bold text-left">
        Document and share your <span className="text-emerald-400">coding journey</span> with others through daily code journals!
      </h2>
      <div className="w-full flex justify-end mt-3 pr-16">
        <a href="/" className="cursor-pointer rounded-full border border-primary px-5 py-2 transition duration-200 ease-in-out hover:bg-emerald-400 hover:text-white shadow-lg">View Dashboard</a>
      </div>
      </div>
    </section>
  </div>

    
  <section className='w-full flex flex-col max-w-[1100px]'>
    <div className='flex w-full h-auto p-5 items-center justify-between gap-x-10'>
      <div className="w-1/2 h-auto">
        <img src="./images/Code-typing.svg" width="500px" alt="" />
      </div>
      <div className="w-1/2">
        <h3 className="text-3xl text-emerald-400 tracking-wide font-bold">Daily Journaling</h3>
        <p className=" text-gray-400 text-lg mt-5">Codeful allows you to capture your coding progress through daily journaling. These daily journals allow allow to reinforce learned concepts, reflect on tough problems and retain greater amounts of information.</p>
      </div>
    </div>
  </section>

  <section className='w-full flex flex-col max-w-[1100px]'>
    <div className='flex w-full h-auto p-5 items-center justify-between gap-x-10'>
    <div className="w-1/2">
        <h3 className="text-3xl text-emerald-400 tracking-wide font-bold">Track Your Progress</h3>
        <p className=" text-gray-400 text-lg mt-5">Our personalized statistics page makes it seamless for you to track your coding progress from beginner programmer to expert! You'll be able to see how many hours you've spent studying, which frameworks and languages you spend the most time on and much more!</p>
      </div>
      <div className="w-1/2 h-auto">
        <img src="./images/Charts-bro.svg" width="500px" alt="" />
      </div>
    </div>
  </section>

  <section className='w-full flex flex-col max-w-[1100px]'>
    <div className='flex w-full h-auto p-5 items-center justify-between gap-x-10'>
      <div className="w-1/2 h-auto">
        <img src="./images/Pair-programming-bro.svg" width="500px" alt="" />
      </div>
      <div className="w-1/2">
        <h3 className="text-3xl text-emerald-400 tracking-wide font-bold">Share with Friends</h3>
        <p className=" text-gray-400 text-lg mt-5">Publish your journal entires for the world to see! If you are journaling about an interesting topic, feel free to share it on our public feed for others to read!</p>
      </div>
    </div>
  </section>
</section>
  );

}