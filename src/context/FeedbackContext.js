import { createContext, useState } from "react";

const FeedbackContext = createContext()


export const FeedbackProvider = ({children}) => {
    const [feedbackedit, setFeedbackedit] = useState({item:{}, edit:false})
    const [feedback, setFeedback] = useState([{
        id:1,
        text:'from context',
        rating:4
    }])

    const addfeedback =  (newfeedback) => {
  
        setFeedback([newfeedback, ...feedback])
      }
      

    function Deletefeedbackitem(id){
        setFeedback(feedback.filter((item) => item.id !== id))
   }

   const editfeedback = (item) => {
       setFeedbackedit({
           item,
           edit:true
       })
   }



    return <FeedbackContext.Provider value={{feedback, Deletefeedbackitem, addfeedback, editfeedback, feedbackedit}}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;