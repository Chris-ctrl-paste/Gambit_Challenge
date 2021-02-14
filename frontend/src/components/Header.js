import React from 'react'
import '../css/Header.css';
function Header() {
    return (
        <div>
             <div className="header_middle">
               <h1><a href="http://localhost:9000/" >BACKEND</a></h1>
               <h1 className="space"><a href="http://localhost:9000/feed.txt" >TEXT-FEED</a></h1>
            </div>
        </div>
    )
}

export default Header
