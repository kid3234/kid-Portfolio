import React from 'react';
import prodata from './Mydata';

export default function Body() {
  return (
    <div id="body" className="flex  bg-slate-900">
    {prodata.pro.map((val, index) => (
      <div key={index} className="rounded p-4 m-4 h-80 max-w-xs relative" style={{ backgroundImage: `url(${val.url})` }}>
        <h1 className="font-black">{val.title}</h1>
        <p className="text-current font-thin line-clamp-none text-justify">{val.description}</p>
        <a href={val.git} className="absolute bottom-0 left-0 w-full bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded">
          Github
        </a>
      </div>
    ))}
  </div>
  


  );
}
