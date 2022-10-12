import "./questions.styles.scss";
import { Interweave } from "interweave";
import { useState } from "react";

const Questions = (props) => {

	const [selectedIndex, setSelectedIndex] = useState(
		{
			value: "",
			isHeld: false
		}
	);
	// const [valuePressed, setValuePressed] = useState(false);

	console.log("selected Indsex below");
	console.log(selectedIndex);
	const correctAnswerSeparately = props.incorrectAnswers;
	// console.log(correctAnswerSeparately);
	const answersMixed = correctAnswerSeparately.flat().sort();
	console.log(answersMixed);


	const toggleOption = (event) => {
		let answer = event.target.innerText;
		setSelectedIndex(prevValue => ({value: answer, isHeld: !prevValue.isHeld}))
	}

	const answerOption = answersMixed.map((answer) => <button
		key={answer.toString()}
		onClick={(event) => [props.holdAnswer(event, props.correctAnswer), toggleOption(event)]}
		style={{ backgroundColor: (selectedIndex.isHeld && answer === selectedIndex.value)? '#D6DBF5' : 'none'}}
	>
		 <Interweave content={answer} />
		</button>)
		
	return (
		<div className="quastion-answer-container">
			<Interweave className="questions" content={props.question} />
			<div>
				<div className="answer-options-container">
					{answerOption}
					
				</div>
				<hr className="answer-line" />
			</div>
		</div>
	)
}

export default Questions;