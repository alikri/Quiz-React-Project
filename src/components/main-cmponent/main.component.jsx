import "./main.styles.scss";
import FirstPage from "./first-page/first-page";
import Questions from "./questions/questions.component";
import { useState, useEffect } from "react";


const MainComponent = () => {

	const [quiz, setQuiz] = useState(false);
	const [questions, setQuestions] = useState([])


	useEffect(() => {
		getData()
	}, [])

	async function getData() {
		const response = await fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple");
		const data = await response.json();
		setQuestions(data.results)

	}
	console.log("state below")
	console.log(questions);

	const startQuiz = () => {
		setQuiz(true);
		console.log("quiz started")
	}

	const questionsAnswers = questions.map((question) => <Questions
		key={question.correct_answer}
		question={question.question}
		incorrectAnswers={question.incorrect_answers}
		correctAnswer={question.correct_answer}
	
	/>)

	return (
		<div className="main-background">
			{quiz && <FirstPage startQuiz={startQuiz} />}
			{questionsAnswers}
		</div>
	)
}

export default MainComponent;