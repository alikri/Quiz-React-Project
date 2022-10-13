import "./questions.styles.scss";
import { Interweave } from "interweave";
import { useState } from "react";
import htmr from 'htmr';

const Questions = (props) => {
	// console.log("show results")
	// console.log(props.showResults);
	const [selectedIndex, setSelectedIndex] = useState({
			value: "",
			isHeld: false
		});
	
	// console.log(selectedIndex);

	const correctAnswerSeparately = props.incorrectAnswers;
	// console.log(correctAnswerSeparately);
	const answersMixed = correctAnswerSeparately.flat().sort();
	// console.log(answersMixed);


	const toggleOption = (event, correct) => {
		// console.log(event);
		let answer = event.target.innerText;
		
		setSelectedIndex({value: answer, isHeld: true})
		
		// console.log("answer ")
		// console.log(correct)
		// console.log(answer)
	}


	const answerOption = answersMixed.map((answer) => <button
		key={answer.toString()}
		onClick={(event) => [props.holdAnswer(event, htmr(props.correctAnswer)),toggleOption(event, htmr(props.correctAnswer))]}
		className={`${selectedIndex.isHeld && htmr(answer) === selectedIndex.value ? "btn-clicked" : "none"} 
		${props.showResults && answer === props.correctAnswer ? "btn-correct" : "none"} 
		${props.showResults && answer !== props.correctAnswer && htmr(answer) === selectedIndex.value ? "btn-wrong" : "none"}
		${props.showResults && answer !== props.correctAnswer && htmr(answer) !== selectedIndex.value ? "left-btn" : "none"}`}
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