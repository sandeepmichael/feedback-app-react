import React from 'react'
import Card from './Card'
import { useContext } from 'react'
import {AiTwotoneDelete, AiFillEdit} from 'react-icons/ai'
import FeedbackContext from '../context/FeedbackContext'

const Feedbackitem = ({item, }) => {
   const {Deletefeedbackitem, editfeedback} = useContext(FeedbackContext)

    return (
        <Card>
            <div className='num-display'>{item.rating}</div>
            <button onClick={() => Deletefeedbackitem(item.id)} className='close'>
                <AiTwotoneDelete color='red'/>
            </button>
            <button onClick={() => editfeedback(item)}className='edit'>
                <AiFillEdit color='brown'/>
            </button>
            <div className='text-display'>{item.text}</div>
          
            
        </Card>
    )
}

export default Feedbackitem
