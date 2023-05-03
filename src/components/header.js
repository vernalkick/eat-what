'use client'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const linkClasses = `nav-links ${isOpen ? 'show-links' : ''}`
  
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <nav class="navbar">
     <div class="nav-center">
         <div class="nav-header">
             <a><img src="/images/eating.jpg" width="250" height="60" ></img></a>
             <button type="button" class="nav-btn" onClick={handleClick}>
              <img src="/images/menu.png" width="10px" height="10px" />
             </button>
         </div>
          <div className={linkClasses}>
              <a href="index.html" class="nav-link">home</a>
              <a href="about.html" class="nav-link">about</a>
              <a href="order.html" class="nav-link">order</a>
          </div>
     </div>   
   </nav>
  )
}

export default Header
