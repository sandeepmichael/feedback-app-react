import React, {useState, useContext, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import FeedbackContext from '../context/FeedbackContext'
import Card from './Card'
import Ratingselect from './Ratingselect'

const Feedbackform = () => {
    const [text, setText] = useState('')
    const [rating, setRating] = useState('')

    const {addfeedback, feedbackedit} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackedit.edit === true){
        setText(feedbackedit.item.text)
        setRating(feedbackedit.item.rating)
        }

    },[feedbackedit])
   
 
    const handleChange = (e) => {
     
        setText(e.target.value)
    }
  
const submitHandler = (e) => {
    e.preventDefault()
    const newfeedback = {
          id:uuidv4(),
        text,
        rating,
        
    }
    addfeedback(newfeedback)
    setText('')
    
}



    return (
        <Card>
            <form onSubmit={submitHandler}>
                <h2>How would you rate us?</h2>
                <Ratingselect  select={(rating) => setRating(rating)}/>
                <div className='input-group'>
                    <input onChange={handleChange} type='text' value={text} placeholder='write a review'></input>
                    <button className='btn btn-primary'>Send</button>
                </div>
            </form>
            
        </Card>
    )
}

export default Feedbackform
