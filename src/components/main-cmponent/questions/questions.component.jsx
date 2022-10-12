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
	

	const correctAnswerSeparately = props.incorrectAnswers;
	// console.log(correctAnswerSeparately);
	const answersMixed = correctAnswerSeparately.flat().sort();
	// console.log(answersMixed);


	const toggleOption = (event, correct) => {
		let answer = event.target.innerText;
		setSelectedIndex(prevValue => ({prevValue, value: answer, isHeld: true }))
		console.log("correct answer and wrong answer next")
		console.log(correct)
		console.log(answer)
	}


	const answerOption = answersMixed.map((answer) => <button
		key={answer.toString()}
		onClick={(event) => toggleOption(event, props.correctAnswer)}
		className={`${selectedIndex.isHeld && answer === selectedIndex.value? "btn-clicked": "none"}`}
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