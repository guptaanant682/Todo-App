"use client"

import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState(" ");
  const [desc, setdesc] = useState(" ");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask(prevMainTask => [...prevMainTask, { title, desc }]);
    // setMainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask)
  };

  const deleteHandler = (i) =>{
    let copyTask = [...mainTask];
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>
  if (mainTask.length > 0) {

    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-5'>
          <div className='flex itmes-center justify-between w-2/3 mb-5 '>
            <h5 className=' text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-xl font-semibold'>{t.desc}</h6>
          </div>
          <button onClick={()=>{
            deleteHandler(i)
          } } className='bg-red-400 text-white px-4 mr-14 py-2 rounded font-bold'>Delete</button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-semibold text-center' >Anant's Todo List</h1>
      <form onSubmit={submitHandler}>
        <input type='text'
          className='3xl border-zinc-700 border-2 m-8 px-4 py-2' placeholder="Enter task Here" value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
        />

        <input type='text' className='3xl border-zinc-700 border-2 m-4 px-4 py-2' placeholder='Enter Description Here'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />

        <button className='bg-black text-white  m-5 px-4 py-3 font-bold rounded'>Add task</button>
      </form>

      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page