import "./first-page.styles.scss";


const FirstPage = (props) => {

	return (
		<div className="first-page-container">
			<div className="start-quiz">
				<h2>Quizzical</h2>
				<p>Let 's do a quick check of your computer science knowledge!</p>
				<button
					className="start-quiz-btn"
					onClick={props.startQuiz}
				>
					Start Quiz
				</button>
			</div>
		</div>
	)
}

export default FirstPage;