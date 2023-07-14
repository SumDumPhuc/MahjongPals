import './Quiz.css';
import React, { useState } from 'react';
import bgQ2 from '../../images/BeginnerQn2.png';
import bgQ1 from '../../images/BeginnerQn1.png';
import bgQ3 from '../../images/BeginnerQn3.png';
import bgQ4 from '../../images/BeginnerQn4.png';
import bgQ5 from '../../images/BeginnerQn5.png';
import bgQ6 from '../../images/BeginnerQn6.png';
import bgQ7 from '../../images/BeginnerQn7.png';
import bgQ8 from '../../images/BeginnerQn8.png';
import bgQ9 from '../../images/BeginnerQn9.png';
import bgQ10 from '../../images/BeginnerQn10.png';
import iQ1 from '../../images/IntermediateQn1.png';
import iQ2 from '../../images/IntermediateQn2.png';
import iQ3 from '../../images/IntermediateQn3.png';
import iQ4 from '../../images/IntermediateQn4.png';
import iQ5 from '../../images/IntermediateQn5.png';
import iQ6 from '../../images/IntermediateQn6.png';
import iQ7 from '../../images/IntermediateQn7.png';
import iQ8 from '../../images/IntermediateQn8.png';
import iQ9 from '../../images/IntermediateQn9.png';
import iQ10 from '../../images/IntermediateQn10.png';
import eQ1 from '../../images/ExpertQn1.png';
import eQ2 from '../../images/ExpertQn2.png';
import eQ3 from '../../images/ExpertQn3.png';
import eQ4 from '../../images/ExpertQn4.png';
import eQ5 from '../../images/ExpertQn5.png';
import eQ6 from '../../images/ExpertQn6.png';
import eQ7 from '../../images/ExpertQn7.png';
import eQ8 from '../../images/ExpertQn8.png';
import eQ9 from '../../images/ExpertQn9.png';
import eQ10 from '../../images/ExpertQn10.png';

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
        {
          image: bgQ4,
          question: "Pick the winning tile!",
          options: [
            "Eight Bamboo",
            "Nine Wan",
            "Red Dragon",
            "Two Ball"
          ],
          answer: 1
        },
        {
          image: bgQ5,
          question: "Pick the winning tile!",
          options: [
            "Six Wan",
            "Seven Bamboo",
            "Four Bamboo",
            "Three Bamboo"
          ],
          answer: 2
        },
        {
          image: bgQ6,
          question: "Pick the winning tile!",
          options: [
            "Six Wan",
            "West Wind",
            "Four Ball",
            "One Ball"
          ],
          answer: 2
        },
        {
          image: bgQ7,
          question: "Pick the winning tile!",
          options: [
            "Green Dragon",
            "Seven Wan",
            "One ball",
            "Four Ball"
          ],
          answer: 3
        },
        {
          image: bgQ8,
          question: "Pick the winning tile!",
          options: [
            "Nine Ball",
            "East Wind",
            "Nine Wan",
            "Seven Ball"
          ],
          answer: 0
        },
        {
          image: bgQ9,
          question: "Assuming you have no flowers, how many tai is this hand worth?",
          options: [
            "1 Tai",
            "2 Tai",
            "3 Tai",
            "4 Tai"
          ],
          answer: 3
        },
        {
          image: bgQ10,
          question: "Is this a winning hand?",
          options: [
            "Yes",
            "No"
          ],
          answer: 1
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
          question: "How many tai is this hand worth?",
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
          question: "How many tai is this hand worth?",
          options: [
            "2",
            "3",
            "4",
            "5"
          ],
          answer: 2
        },
        {
          image: iQ4,
          question: "What tiles is this hand waiting for?",
          options: [
            "Seven Wan",
            "Seven Wan and Red Dragon",
            "Red Dragon",
            "Six Wan"
          ],
          answer: 1
        },
        {
          image: iQ5,
          question: "What tiles is this hand waiting for?",
          options: [
            "Seven Ball",
            "Six and Nine Ball",
            "Eight Ball",
            "Six, Eight and Nine Ball"
          ],
          answer: 3
        },
        {
          image: iQ6,
          question: "What tiles is this hand waiting for?",
          options: [
            "Six and Nine Bamboo",
            "Six, Eight and Nine Bamboo",
            "Six Ball",
            "Eight Bamboo"
          ],
          answer: 0
        },
        {
          image: iQ7,
          question: "What tiles is this hand waiting for?",
          options: [
            "Six and Nine Wan",
            "Six and Nine Ball",
            "Three and Six Wan",
            "Three and Six Wan, Six and Nine Ball"
          ],
          answer: 2
        },
        {
          image: iQ8,
          question: "Is this a valid winning hand?",
          options: [
            "Yes",
            "No"
          ],
          answer: 1
        },
        {
          image: iQ9,
          question: "Is this a valid winning hand?",
          options: [
            "Yes",
            "No"
          ],
          answer: 0
        },
        {
          image: iQ10,
          question: "Is this a valid winning hand?",
          options: [
            "Yes",
            "No"
          ],
          answer: 0
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
        {
          image: eQ4,
          question: "What tiles is this hand waiting for?",
          options: [
            "One and Four Bamboo",
            "One, Four and Seven Bamboo",
            "Two, Five and Eight Bamboo",
            "One to Nine Bamboo"
          ],
          answer: 3
        },
        {
          image: eQ5,
          question: "What tiles is this hand waiting for?",
          options: [
            "One and Four Bamboo",
            "One, Four and Seven Bamboo",
            "Two, Five and Eight Bamboo",
            "One to Nine Bamboo"
          ],
          answer: 1
        },
        {
          image: eQ6,
          question: "What tiles is this hand waiting for?",
          options: [
            "One, Three, Four, Six, Seven, Nine Bamboo",
            "One, Four and Seven Bamboo",
            "Two, Five and Eight Bamboo",
            "One to Nine Bamboo"
          ],
          answer: 0
        },
        {
          image: eQ7,
          question: "Is this a valid winning hand?",
          options: [
            "Yes",
            "No"
          ],
          answer: 1
        },
        {
          image: eQ8,
          question: "Is this a valid winning hand?",
          options: [
            "Yes",
            "No"
          ],
          answer: 0
        },
        {
          image: eQ9,
          question: "Is this a valid winning hand?",
          options: [
            "Yes",
            "No"
          ],
          answer: 0
        },
        {
          image: eQ10,
          question: "Is this a valid winning hand?",
          options: [
            "Yes",
            "No"
          ],
          answer: 0
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
      <g2>Select a Quiz Level:</g2>
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
          <g3>{selectedQuiz.level} Quiz</g3>
          {selectedQuiz.questions.map((question, index) => (
            <div className="question" key={index}>
  <div className="question-image">
    {question.image && <img src={question.image} alt="Question" />}
  </div>
  <g4>{index + 1}. {question.question}</g4>
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