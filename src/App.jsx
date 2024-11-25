
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'

function App() {
  const loadedcoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedcoffees)
  

  return (
    <div className='m-20'>
      
      <h1 className='text-purple-900 mb-5 text-4xl text-center'>Simple Coffee Store</h1>

     <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
     {
        coffees.map((coffee) => <CoffeeCard key={coffee._id} coffees = {coffees} setCoffees ={setCoffees} coffee = {coffee}></CoffeeCard>)
      }
     </div>
     <Link to = '/coffee'><button className='mb-3 btn bg-blue-900 text-white'>Add To Coffee</button></Link>
     
    </div>
  )
}

export default App
