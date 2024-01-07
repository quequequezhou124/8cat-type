import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ChoiceList.css';

const ChoiceList = (props) => {
    const choices = props.choices;
    const [scores, setScores] = useState(props.scores);
    const [choiceNum, setChoiceNum] = useState(0);
    const choiceElement = choices[choiceNum];

    const handleClick1 = () => {
        setChoiceNum(choiceNum + 1);
        setScores(scores); // Assuming you want to perform some operation on 'scores'
    };

    const handleClick2 = () => {
        let newScores = choiceNum === 0 ? scores + 4 : scores + 1;
        setScores(newScores);
        setChoiceNum(choiceNum + 1);
    };

    return (
        <div className="choice-list">
            {choiceNum < 4 ? (
                <>
                    <div className='question'>
                        <img src={choiceElement.ss} alt={choiceElement.title} className="choice-image"/>
                        <h2 className="choice-title">{choiceElement.title}</h2>
                    </div>
                    <div className='buttons'>
                        <button onClick={handleClick1}>{choiceElement.choice1}</button>
                        <button onClick={handleClick2}>{choiceElement.choice2}</button>
                    </div>
                </>
            ) : (
                <div className='choice-end'>
                    <Link to="/result" state={{ scores: scores }} className="result-link">哦哦你是...  （点击查看结果）</Link>
                </div>
            )}
        </div>
    );
};

export default ChoiceList;
