import "./main.styles.scss";
import FirstPage from "./first-page/first-page";
import Questions from "./questions/questions.component";
import { useState, useEffect } from "react";


const MainComponent = () => {
	const [quiz, setQuiz] = useState(false);
	const [questions, setQuestions] = useState([])
	const [answers, setAnswers] = useState([]);
	console.log(answers);

	useEffect(() => {
		getData()
	}, [])

	async function getData() {
		const response = await fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple");
		const data = await response.json();
		setQuestions(data.results)
		setAnswers(() => {
			let arr = []
			let results = data.results;
			for (let i = 0; i < results.length; i++) {
				arr.push ([results[i].correct_answer, results[i].incorrect_answers]);
			}
			return arr;
		})
	}

	const startQuiz = () => {
		setQuiz(true);
	}

	const holdAnswer = (event,id) => {
		console.log(event.target.innerText);
		console.log("correct answer below")
		console.log(id);
	
		
	}

	const questionsAnswers = questions.map((question) => <Questions
		key={question.correct_answer}
		question={question.question}
		incorrectAnswers={
			[question.correct_answer, question.incorrect_answers]
		}
		correctAnswer={question.correct_answer}
		holdAnswer={holdAnswer}
		// holdAnswer={(event)=> holdAnswer(event, question.correct_answer)}
	
	/>)

	return (
		<div className="main-background">
			{quiz && <FirstPage startQuiz={startQuiz} />}
			<div className="main-questions-answers">
			{questionsAnswers}
			</div>
			
			<div className="container-check-answers-btn">
				<button className="check-unswers">Check answers</button>
			</div>
		</div>
	)
}

export default MainComponent;