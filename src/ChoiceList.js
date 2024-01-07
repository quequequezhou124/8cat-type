import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ChoiceList.css';

const ChoiceList = (props) => {
    const choices = props.choices;
    const [scores, setScores] = useState(props.scores);
    const [choiceNum, setChoiceNum] = useState(0);
    const choiceElement = choices[choiceNum];

    const handleClick = (increment) => {
        setChoiceNum(choiceNum + 1);
        setScores(scores + increment);
    };

    return (
        <div className={`choice-list ${choiceNum >= 4 ? 'choice-end' : ''}`}>
            {choiceNum < 4 ? (
                <>
                    <div className='question-content'>
                        <img src={choiceElement.ss} alt={choiceElement.title} className="choice-image" />
                        <h2 className="choice-title">{choiceElement.title}</h2>
                    </div>
                    <div className='buttons'>
                        <button onClick={() => handleClick(1)}>{choiceElement.choice1}</button>
                        <button onClick={() => handleClick(choiceNum === 0 ? 4 : 1)}>{choiceElement.choice2}</button>
                    </div>
                </>
            ) : (
                <Link to="/result" state={{ scores: scores }} className="result-link">See your result</Link>
            )}
        </div>
    );
};

export default ChoiceList;
