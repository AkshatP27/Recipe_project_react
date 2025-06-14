import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='max-w-3xl mx-auto'>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
          About Culinary Canvas
        </h1>
        <p className="text-lg text-gray-400">
          Your one-stop destination for discovering, sharing, and creating amazing recipes.
        </p>
      </div>
      
      <div className="bg-gray-800/30 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50 mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-300 mb-6">
          We believe that cooking is an art form, and every chef - amateur or professional - 
          deserves a canvas to express their culinary creativity. Our platform is designed to 
          inspire people to experiment in the kitchen, share their successes, and learn from 
          our community of food enthusiasts.
        </p>
        
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <div className="bg-gradient-to-r from-yellow-400 to-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold">1</span>
            </div>
            <h3 className="font-bold mb-2">Browse</h3>
            <p className="text-gray-400">Explore our collection of recipes from chefs worldwide</p>
          </div>
          
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <div className="bg-gradient-to-r from-yellow-400 to-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold">2</span>
            </div>
            <h3 className="font-bold mb-2">Create</h3>
            <p className="text-gray-400">Share your own recipes with detailed instructions</p>
          </div>
          
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <div className="bg-gradient-to-r from-yellow-400 to-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold">3</span>
            </div>
            <h3 className="font-bold mb-2">Cook</h3>
            <p className="text-gray-400">Follow step-by-step instructions to create delicious meals</p>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
        <div className="flex justify-center gap-4">
          <Link 
            to="/recipes" 
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg text-gray-900 font-bold hover:shadow-lg hover:shadow-yellow-500/20 transition-shadow"
          >
            Browse Recipes
          </Link>
          <Link 
            to="/create-recipe" 
            className="px-6 py-3 border border-gray-600 rounded-lg hover:border-yellow-500 hover:text-yellow-500 transition-colors"
          >
            Create Recipe
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About