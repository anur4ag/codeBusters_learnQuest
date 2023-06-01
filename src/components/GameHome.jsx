import React from 'react'
import BottomProgressBar from './BottomProgressBar'

function GameHome() {
  return (
    <section className='home bg-[url(./assets/background.png)] min-h-screen bg-no-repeat bg-cover bg-center relative'>
        <div className="bg-white absolute top-12 left-44 w-75 h-75 d-inline-block "></div>
        <BottomProgressBar />
    </section>
  )
}

export default GameHome