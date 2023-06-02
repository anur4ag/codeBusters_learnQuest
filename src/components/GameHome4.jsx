import React from 'react'
import BottomProgressBar from './BottomProgressBar'
import b2 from '../assets/b2.png'
import narutoRun from '../assets/narutoRun.gif'
import Button from './Button'

function GameHome4() {
  return (
    <section className='home bg-[url(./assets/background.png)] min-h-screen bg-no-repeat bg-cover bg-center relative'>
        <div className="bg-custom-yellow absolute top-12 left-44 w-75 h-75 d-inline-block ">
          <div className="row">
            <div className="col left-8"><img src={b2} alt="naruto intro" className=" ms-16 w-88 h-3/4"/></div>
            <div className="col-6">
              <h1 className='text-6xl mt-32'>Components in React.js</h1>
              <p className='mt-10'>Components are the building blocks of React.js applications. They are reusable pieces of UI that encapsulate their own logic and rendering. React components can be either functional components or class components.
</p>
              <Button message="Continue" href="/dashboard/game5"/>
            </div>
          </div>

        </div>
        <div className='w-12 absolute bottom-12 left-3/4'>
          <img src={narutoRun} alt="" />
        </div>
        <BottomProgressBar />
    </section>
  )
}

export default GameHome4