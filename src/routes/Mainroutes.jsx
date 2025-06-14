import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import About from '../pages/About'
import Create from '../pages/Create'
import RecipeDetails from '../pages/RecipeDetails'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/recipes/details/:id' element={<RecipeDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='/create-recipe' element={<Create />} />
    </Routes>
  )
}

export default MainRoutes
