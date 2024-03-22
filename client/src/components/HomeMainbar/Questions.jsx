import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Questions = ({ question }) => {
  return (
    <div className="display-question-container">
      <div className="display-votes-ans">
        <p>{question.upVote.length - question.downVote.length}</p>
        <p>votes</p>
      </div>
      <div className="display-votes-ans">
        <p>{question.noOfAnswers}</p>
        <p>answers</p>
      </div>
      <div className="display-votes-ans">
        <p>{question.badges}</p>
      </div>
      <div className="display-question-details">
        <Link to={`/Questions/${question._id}`} className="question-title-link">
          {question.questionTitle.length > (window.innerWidth <= 400 ? 70 : 90)
            ? question.questionTitle.substring(
                0,
                window.innerWidth <= 400 ? 70 : 90
              ) + "..."
            : question.questionTitle}
        </Link>
        <div className="display-tags-time">
          <div className="display-tags">
            {question.questionTags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
          
          <p className="display-time">
          {question.upVote.length >=4 && <span style={{color:'white', backgroundColor:'#f48024', padding:'3px 5px',borderRadius:'20px' ,fontSize:'10px', margin:'2px'}}>Popular</span>}
          
            asked {moment(question.askedOn).fromNow()} {question.userPosted}
            
         
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
