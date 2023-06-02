import React from 'react'
import BottomProgressBar from './BottomProgressBar'
import c1 from '../assets/c1.png'
import narutoRun from '../assets/narutoRun.gif'
import Button from './Button'

function GameHome2() {
  return (
    <section className='home bg-[url(./assets/background.png)] min-h-screen bg-no-repeat bg-cover bg-center relative'>
        <div className="bg-custom-yellow absolute top-12 left-44 w-75 h-75 d-inline-block ">
          <div className="row">
            <div className="col left-8"><img src={c1} alt="naruto intro" className="mt-16 ms-36 w-88 h-2/4"/></div>
            <div className="col-6">
              <h1 className='text-6xl mt-32'>Question 1</h1>
              <p className='mt-10'>Q. What is ReactJS ?</p>
              <div className="class ms-10">
                <p className="">a. A progamming launguage</p>
                <p className="">b. A JavaScript Framework</p>
                <p className="">c. A library for building user interfaces</p>
                <p className="">d. A database management system</p>
              </div>

              <Button message="Continue" href="/dashboard/game4"/>
            </div>
          </div>

        </div>
        <div className='w-12 absolute bottom-12 left-2/4'>
          <img src={narutoRun} alt="" />
        </div>
        <BottomProgressBar />
    </section>
  )
}

export default GameHome2