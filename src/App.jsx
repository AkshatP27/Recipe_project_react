import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='w-screen h-screen py-9 px-[18%] bg-gray-900 text-gray-50'>
      <Navbar />
      <MainRoutes />
    </div>
  )
}

export default App