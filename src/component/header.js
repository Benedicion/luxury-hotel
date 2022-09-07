import React from 'react'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <>
        <header>
            <div>
                <Link className='links' to='/'>Home</Link>
            </div>

            <nav>
                <ul>
                    <Link className='links' to='login'>Login</Link>
                    <Link className='links' to='singup'>SingUp</Link>
                    
                </ul>
            </nav>
        </header>
    </>
  )
}

export default header
