import { Link } from 'react-router-dom'
import React from 'react'
import Card from './Card'

const aboutPage = () => {
    return (
        <div>
            <header style={{backgroundColor:'violet'}}>
                <div className='container'>
                <h1>About Page</h1>
                </div>
            </header>
            <Card>
                <p>This is the feedback react project created by me..</p>
                <Link to='/'>Go To Homepage</Link>
            </Card>
           
        </div>
    )
}

export default aboutPage
