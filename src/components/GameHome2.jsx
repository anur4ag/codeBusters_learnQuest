import React from 'react'
import BottomProgressBar from './BottomProgressBar'
import a1 from '../assets/a1.png'
import narutoRun from '../assets/narutoRun.gif'
import Button from './Button'

function GameHome2() {
  return (
    <section className='home bg-[url(./assets/background.png)] min-h-screen bg-no-repeat bg-cover bg-center relative'>
        <div className="bg-custom-yellow absolute top-12 left-44 w-75 h-75 d-inline-block ">
          <div className="row">
            <div className="col left-8"><img src={a1} alt="naruto intro" className="mt-16 ms-16 w-96 h-3/4"/></div>
            <div className="col-6">
              <h1 className='text-6xl mt-32'>What is react ?</h1>
              <p className='mt-10'>React.js is an open-source JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently manage the state of those components. React.js uses a virtual DOM (Document Object Model) for efficient rendering and updating of the user interface.</p>
              <Button message="Continue" href="/dashboard/game3"/>
            </div>
          </div>

        </div>
        <div className='w-12 absolute bottom-12 left-1/4'>
          <img src={narutoRun} alt="" />
        </div>
        <BottomProgressBar />
    </section>
  )
}

export default GameHome2