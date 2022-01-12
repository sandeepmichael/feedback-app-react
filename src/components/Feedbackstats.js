import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


const Feedbackstats = () => {
    const {feedback} = useContext(FeedbackContext)
    return (
        <div className='feedback-stats'>
            {feedback.length === 1 ? <h3>1 Review</h3> : <h3>{feedback.length} Reviews</h3>}
        </div>
    )
}

export default Feedbackstats
