import {useState,useEffect} from 'react'
import Singleq from './Discuss'
import AskQues from './AskQues'

const DiscussionForam = ({ques}) => {

    const [Discussions,setDiscussions] = useState (
        [
          {
              id:1,
              Title:'Compititve coding',
              Ques:'What is Software Enggineering',
              Author:'John Wick',
              status:'prof',
              Likes: '50',
              dislikes:'0',
              share : '3',
              Topic : 'none',
      
          },
          {
            id:2,
            Title:'Compititve coding',
            Ques:'What is Software Enggineering ',
            Author:'saurabh Tiwari',
            status:'prof',
            Likes: '50',
            dislikes:'0',
            share : '3',
            Topic : 'none',
          }
         
      ]
      )

  
      const addQuestion=(ques)=>{  
        const id=5,Author="Jainit";
         setDiscussions([...Discussions,{id,Author,Ques:ques}]);
         console.log(ques);
      }

      const AddaQues = ({Ques,Topic}) =>
      {
        const id=1;              // to be added curent user id  unique
        const Author='me';       // current user name 
        const status='student';  // if current student is prof or student
        const nwQues={id,Author,Ques,Topic,status}
        setDiscussions([...Discussions,nwQues]);
        console.log("ques: "+Discussions);
        console.log(nwQues);
      }

    const [Answers,setAns] =useState([
      {
        id:1,   
        Author:'himanshu',
        comment:'Answer 1'
      },
      {
        id:1,   
        Author:'himanshu',
        comment:'Answer again 1'
      },
      {
        id:2,
        Author:'xyz',
        comment:'I think this is good course to learn things and also good team work'
      }
    ]
    )  
     
  

      const giveAnswer=(id)=>{
        const temp=Answers.filter((i)=>i.id===id)
        return temp;
        }

      const addAnswer= (Ans) => {
        
        setAns([...Answers,Ans]);
      }

      useEffect(
        ()=>{
          console.log({Answers});
        }
        ,[Answers]
      );
      

    return (
        <div className='discussion-box'>
            <div className="question-container">
              
              <div>
                {Discussions.map( (Discuss) => (
                  <>
                    <div className='discussionBox'>
                      <div>
                      <Singleq Discuss={Discuss} givAnswers={giveAnswer} AddAns={addAnswer}>
                  </Singleq>
                      </div>
                    
                    </div>

                  </>
                    )
                )}
              </div>
                <div>
                
                  <AskQues addQue={AddaQues}/>
                </div>
                
            </div>
            </div> 
    );
}

export default DiscussionForam
