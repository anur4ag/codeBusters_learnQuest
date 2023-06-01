import Navbar from './Navbar'
import Button from './Button'
import home from '../assets/home.png'

function AboutSection() {
  return (
    <section className="home bg-[url(./assets/background.png)] min-h-screen bg-no-repeat bg-cover bg-center ">
        <Navbar />
        <div className="row mt-44">
          <div className="col-lg-6 col-md-12">
            <div className="m-auto p4">
              <img src={home} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
          <div className=" mt-28 p-4">
            <h1 className="text-6xl text-white font-extrabold">
              About Us
            </h1>
            <p className='text-white mt-8'>At the core of LearnQuest lies an extensive library of interactive and immersive learning modules covering a wide range of subjects, from mathematics and science to languages and history. These modules are carefully designed to ensure that learning becomes a thrilling adventure, rather than a monotonous task. Learners embark on quests, solve puzzles, and overcome challenges, all while gaining valuable knowledge and skills.</p>
            <div className="mt-8">
              <Button message={"Connect Metamask Wallet"} />
            </div>
          </div>
          </div>
        </div>
      </section>
  )
}

export default AboutSection