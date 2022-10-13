import "./main.styles.scss";
import FirstPage from "./first-page/first-page";
import Questions from "./questions/questions.component";
import { useState, useEffect } from "react";


const MainComponent = () => {
	const [quiz, setQuiz] = useState(false);
	const [questions, setQuestions] = useState([])
	const [answers, setAnswers] = useState([]);
	const [showResults, setShowResults] = useState(false);
	const [count, setCount] = useState(0);
	const [newGame, setNewGame] = useState(false);

	useEffect(() => {
		getData()
	}, [newGame])

	async function getData() {
		const response = await fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple");
		const data = await response.json();
		setQuestions(data.results)
		setAnswers(() => {
			let arr = [];
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

	
	const holdAnswer = (event, id) => {
		let answer = event.target.innerText;
		if (answer === id) {
			setCount(prevCount => prevCount + 1);
		}  
	}
	
	const toggleResult = () => {
		if (!showResults) {
			setShowResults(true)
		} else {
			setShowResults(false);
			setCount(0);
			setQuestions([]);
			setNewGame(prevValue => !prevValue);
		}
		
	}
	const questionsAnswers = questions.map((question) => <Questions
		key={question.correct_answer}
		question={question.question}
		incorrectAnswers={
			[question.correct_answer, question.incorrect_answers]
		}
		correctAnswer={question.correct_answer}
		holdAnswer={holdAnswer}
		showResults={showResults}
		newGame={newGame}
	
	/>)

	return (
		<div className="main-background">
			{!quiz && <FirstPage startQuiz={startQuiz} />}
			<div className="main-questions-answers">
			{questionsAnswers}
			</div>
			<div className="container-check-answers-btn">
				{showResults && <h2>You scored {count}/{answers.length} correct answers</h2>}
				<button className="check-answers"
				onClick={toggleResult}
				>{showResults ? "Play again": "Check answers"}</button>
			</div>
		</div>
	)
}

export default MainComponent;