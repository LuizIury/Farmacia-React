import homeLogo from '../../assets/home.png'


function Home() {
    return (
        <>
        <div className="bg-red-800 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Como podemos te ajudar, invocador?</h2>
              <p className='text-xl'>Tudo para você se curar!</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-green-600 py-2 px-4'>Ver mágias de cura!</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;