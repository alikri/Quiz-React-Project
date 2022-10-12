import "./questions.styles.scss";
import { Interweave} from "interweave";

const Questions = (props) => {

	

	const correctAnswerSeparately = props.incorrectAnswers;
	// console.log(correctAnswerSeparately);
	const answersMixed = correctAnswerSeparately.flat().sort();
	// console.log(answersMixed);

	const answerOption = answersMixed.map((answer) => <button
		key={answer.toString()}
		onClick={props.holdAnswer}
		
	>
			<Interweave content={answer} />
	</button>)

	return (
		<div className="quastion-answer-container">
			<Interweave className="questions" content={props.question } />
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