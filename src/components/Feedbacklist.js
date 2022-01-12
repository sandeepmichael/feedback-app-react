import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Feedbackitem from './Feedbackitem'

const Feedbacklist = () => {
  const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
        return <p>Please Give Feedback...!</p>
    }


    return (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <Feedbackitem key={item.id} item={item} />
            )

            )}
            
        </div>
    )
}

export default Feedbacklist
