import { Link } from 'react-router-dom'

function Navbar() {
 

  return (
    <>
     <div className='w-full bg-white text-red-700 flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Soraka Farmácia</div>

            <div className='flex gap-4'>
            <Link to='/home' className='hover:underline'>Home</Link>
            <Link to='/produto' className='hover:underline'>Produto</Link>
            <Link to='/categoria' className='hover:underline'>Categoria</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar