import React from 'react'
import MainRoutes from './routes/Mainroutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-50'>
      <div className='container mx-auto py-9 px-6 md:px-8 lg:px-[10%] xl:px-[16%]'>
        <Navbar />
        <MainRoutes />
      </div>
    </div>
  )
}

export default App