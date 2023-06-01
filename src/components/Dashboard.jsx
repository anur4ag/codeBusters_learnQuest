import Button from './Button'

function Dashboard(props) {
  return (

    <section className='home bg-[url(./assets/background.png)] min-h-screen bg-no-repeat bg-cover bg-center relative'>
      <h3>{props.account.name}</h3>
        <div className="absolute top-44 left-12">
            <h1 className='text-6xl text-white font-semibold'>LET THE BATTLE BEGIN</h1>
            <div className="flex flex-row flex-wrap gap-10">
            <Button message="React.js"/>
            <Button message="Node.js"/>
            <Button message="Express.js"/>
            <Button message="MongoDB"/>
            <Button message="Next.js"/>
            <Button message="others"/>

            </div>
        </div>
     
      
    </section>
  )
}

export default Dashboard