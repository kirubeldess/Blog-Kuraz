import React from 'react'

function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 border-b bg-white font-sans">
        
        <div className="text-2xl font-bold text-blue-600">Blog</div>
      
        
        <div>
          <button className="px-4 py-2 text-white bg-blue-600 rounded-full font-semibold text-sm">
            Log in
          </button>
        </div>
      </nav>
      
    )
  }
  
  export default Navbar
  