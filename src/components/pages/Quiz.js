import './Quiz.css';
import React, { useState } from 'react';
import bgQ2 from '../../images/BeginnerQn2.png';
import bgQ1 from '../../images/BeginnerQn1.png';
import bgQ3 from '../../images/BeginnerQn3.png';
import iQ1 from '../../images/IntermediateQn1.png';
import iQ2 from '../../images/IntermediateQn2.png';
import iQ3 from '../../images/IntermediateQn3.png';
import eQ1 from '../../images/ExpertQn1.png';
import eQ2 from '../../images/ExpertQn2.png';
import eQ3 from '../../images/ExpertQn3.png';

const Quiz = () => {
  const [answers, setAnswers] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const quizzes = [
    {
      level: "Beginner",
      questions: [
        {
          image: bgQ1,
          question: "Pick the winning tile!",
          options: [
            "Four Ball",
            "Four Wan",
            "Nine Wan",
            "Four Bamboo"
          ],
          answer: 0
        },
        {
          image: bgQ2,
          question: "Pick the winning tile!",
          options: [
            "One Ball",
            "Two Wan",
            "Seven Wan",
            "Three Bamboo"
          ],
          answer: 2
        },
        {
          image: bgQ3,
          question: "Pick the winning tile!",
          options: [
            "Eight Bamboo",
            "One Wan",
            "Nine Bamboo",
            "One Ball"
          ],
          answer: 0
        },
      ]
    },
    {
      level: "Intermediate",
      questions: [
        {
          image: iQ1,
          question: "Which is the best tile to discard?",
          options: [
            "Eight Bamboo",
            "Seven Bamboo",
            "Nine Wan",
            "Seven Wan"
          ],
          answer: 2
        },
        {
          image: iQ2,
          question: "How many doubles does this hand give?",
          options: [
            "1",
            "2",
            "3",
            "4"
          ],
          answer: 1
        },
        {
          image: iQ3,
          question: "How many doubles does this hand give?",
          options: [
            "2",
            "3",
            "4",
            "5"
          ],
          answer: 2
        },
      ]
    },
    {
      level: "Expert",
      questions: [
        {
          image: eQ1,
          question: "Which tiles is this hand waiting for?",
          options: [
            "One to Nine Ball",
            "Three, Six Ball",
            "One, Four, Seven Ball",
            "Two, Five, Eight Ball"
          ],
          answer: 0
        },
        {
          image: eQ2,
          question: "Which tiles is this hand waiting for?",
          options: [
            "One, Four, Seven Ball",
            "Two, Four, Five Ball",
            "Three, Six, Nine Ball",
            "Two, Five, Eight Ball"
          ],
          answer: 1
        },
        {
          image: eQ3,
          question: "Which is the best tile to discard?",
          options: [
            "Three Ball",
            "Seven Ball",
            "Eight Ball",
            "Nine Ball"
          ],
          answer: 3
        },
      ]
    },
  ];

  // Function to handle option selection
  const handleOptionSelect = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  // Function to calculate the quiz score
  const calculateScore = () => {
    let score = 0;

    selectedQuiz.questions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        score++;
      }
    });

    return score;
  };

  // Function to handle quiz submission
  const submitQuiz = () => {
    const score = calculateScore();
    alert(`Your score is: ${score}/${selectedQuiz.questions.length}!`);
  };
  return (
    <div>
      <h2>Select a Quiz Level:</h2>
      <div>
        {quizzes.map((quiz, index) => (
          <button
            key={index}
            className="quiz-level-button"
            onClick={() => setSelectedQuiz(quiz)}
          >
            {quiz.level}
          </button>
        ))}
      </div>

      {selectedQuiz && (
        <div>
          <h3>{selectedQuiz.level} Quiz</h3>
          {selectedQuiz.questions.map((question, index) => (
            <div className="question" key={index}>
  <div className="question-image">
    {question.image && <img src={question.image} alt="Question" />}
  </div>
  <h4>{index + 1}. {question.question}</h4>
  <div className="options">
    {question.options.map((option, optionIndex) => (
      <div
        className={`option ${answers[index] === optionIndex ? 'selected' : ''}`}
        key={optionIndex}
        onClick={() => handleOptionSelect(index, optionIndex)}
      >
        <div className="selection-bubble"></div>
        {option}
      </div>
    ))}
  </div>
</div>


          ))}
          <button className="submit-button" onClick={submitQuiz}>
            Submit Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;