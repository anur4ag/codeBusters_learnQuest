import React from 'react'
import BottomProgressBar from './BottomProgressBar'
import narutoIntro from '../assets/narutoIntro.png'
import narutoRun from '../assets/narutoRun.gif'
import Button from './Button'

function GameHome1() {
  return (
    <section className='home bg-[url(./assets/background.png)] min-h-screen bg-no-repeat bg-cover bg-center relative'>
        <div className="bg-custom-yellow absolute top-12 left-44 w-75 h-75 d-inline-block ">
          <div className="row">
            <div className="col"><img src={narutoIntro} alt="naruto intro" className="mt-28 w-96 h-3/4"/></div>
            <div className="col-6">
              <h1 className='text-6xl mt-32'>Welcome to the battle field</h1>
              <ol className='mt-14'>
                <li> 1. Learn about the track through dedicated modules</li>
                <li>2. Test your knowledge through quizzes</li>
              </ol>
              <Button message="Let the battle begin" href="/dashboard/game2"/>
            </div>
          </div>

        </div>
        <div className='w-12 absolute bottom-12'>
          <img src={narutoRun} alt="" />
        </div>
        <BottomProgressBar />
    </section>
  )
}

export default GameHome1