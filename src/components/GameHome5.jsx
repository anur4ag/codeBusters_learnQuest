import React from 'react'
import BottomProgressBar from './BottomProgressBar'
import d1 from '../assets/d1.png'
import narutoRun from '../assets/narutoRun.gif'
import Button from './Button'

function GameHome5() {
  return (
    <section className='home bg-[url(./assets/background.png)] min-h-screen bg-no-repeat bg-cover bg-center relative'>
        <div className="bg-custom-yellow absolute top-12 left-44 w-75 h-75 d-inline-block ">
          <div className="row">
            <div className="col left-8"><img src={d1} alt="naruto intro" className="mt-16 ms-36 w-88 h-2/4"/></div>
            <div className="col-6">
              <h1 className='text-6xl mt-32'>Question 2</h1>
              <p className='mt-10'>Q. Which type of component is the simplest and most commonly used in React.js?</p>
              <div className="class ms-10">
                <p className="">a. Functional components</p>
                <p className="">b. Class components</p>
                <p className="">c. Stateful components</p>
                <p className="">d. Lifecycle components</p>
              </div>

              <Button message="Continue" href="/dashboard/leaderboard"/>
            </div>
          </div>

        </div>
        <div className='w-12 absolute bottom-12 right-0'>
          <img src={narutoRun} alt="" />
        </div>
        <BottomProgressBar />
    </section>
  )
}

export default GameHome5