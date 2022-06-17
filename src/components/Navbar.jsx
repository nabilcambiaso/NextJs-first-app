import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav>
            <div className='logo'>
                <Link href="/"><h1>NextJs App</h1></Link>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/"><a>More</a></Link>

        </nav>
    )
}

export default Navbar