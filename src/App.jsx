import React from 'react'
import MainRoutes from './routes/Mainroutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-gray-50'>
      <div className='max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
        <Navbar />
        <main className="mt-10">
          <MainRoutes />
        </main>
      </div>
    </div>
  )
}

export default App