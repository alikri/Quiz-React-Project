import "./questions.styles.scss";

const Questions = (props) => {

	console.log(props);
	return (
		<div>
			<div>{props.question}</div>
			<div>
				{/* <button>{props.incorrectAnswers}</button> */}
				<button>{props.correctAnswer}</button>
			</div>
		</div>
	)
}

export default Questions;