import React, { useState } from 'react';
import './ChipCalculator.css';

function ChipCalculator() {
  const initialValues = {
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    field6: '',
    field7: '',
    field8: ''
  };

  const [values, setValues] = useState({ ...initialValues });
  const [submitted, setSubmitted] = useState(false); // Track if form is submitted

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const allFieldsFilled = Object.values(values).every((value) => value.trim() !== '');
    if (allFieldsFilled) {
      setSubmitted(true); // Set submitted state to true
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleEdit = () => {
     setSubmitted(false); // Allow editing by setting submitted state to false
  };

  const math = require('mathjs');

  const simplifyExpression = (expression) => {
  try {
    // Evaluate the expression using math.evaluate() from math.js
    const result = math.evaluate(expression);
    return result;
  } catch (error) {
    console.error('Error evaluating expression:', error);
    return null;
  }
};

const renderResults = () => {
  // Render the results screen if form is submitted
  if (submitted) {
    // Your existing code for calculating the results
    const resultField2 = simplifyExpression(values.field2);
    const resultField4 = simplifyExpression(values.field4);
    const resultField6 = simplifyExpression(values.field6);
    const resultField8 = simplifyExpression(values.field8);

    // Combine player names and chip counts into an array of objects
    const chipLog = [
      { player: values.field1, chips: resultField2 },
      { player: values.field3, chips: resultField4 },
      { player: values.field5, chips: resultField6 },
      { player: values.field7, chips: resultField8 },
    ];

    // Sort the chip log array based on chips count in descending order
    chipLog.sort((a, b) => b.chips - a.chips);

    return (
      <div className="results">
        <h2>Chip Log</h2>
        <div className="valuesContainer">
          {/* Display the sorted chip log */}
          {chipLog.map((entry, index) => (
            <div className="valuePair" key={index}>
              <span>
                {index === 0 ? '👑 ' : ''} {/* Show the king emoji for the first player */}
                {entry.player} : 
              </span>
              <span>{entry.chips}</span>
            </div>
          ))}
        </div>
        <button onClick={handleEdit} className="editButton">Edit</button>
      </div>
    );
  }
  return null; // Render nothing if form is not submitted
};

return (
  <div className="container-cc">
    <h1 className="title">Chip Calculator</h1>
    {!submitted && (
      <form onSubmit={handleSubmit} className="form">
        <div className="fieldPair">
          <input
            type="text"
            name="field1"
            value={values.field1}
            onChange={handleChange}
            placeholder="Player Name"
            className="inputField"
          />
          <input
            type="text"
            name="field2"
            value={values.field2}
            onChange={handleChange}
            placeholder="Chips"
            className="inputField"
          />
        </div>
        <div className="fieldPair">
          <input
            type="text"
            name="field3"
            value={values.field3}
            onChange={handleChange}
            placeholder="Player Name"
            className="inputField"
          />
          <input
            type="text"
            name="field4"
            value={values.field4}
            onChange={handleChange}
            placeholder="Chips"
            className="inputField"
          />
        </div>
        <div className="fieldPair">
          <input
            type="text"
            name="field5"
            value={values.field5}
            onChange={handleChange}
            placeholder="Player Name"
            className="inputField"
          />
          <input
            type="text"
            name="field6"
            value={values.field6}
            onChange={handleChange}
            placeholder="Chips"
            className="inputField"
          />
        </div>
        <div className="fieldPair">
          <input
            type="text"
            name="field7"
            value={values.field7}
            onChange={handleChange}
            placeholder="Player Name"
            className="inputField"
          />
          <input
            type="text"
            name="field8"
            value={values.field8}
            onChange={handleChange}
            placeholder="Chips"
            className="inputField"
          />
        </div>
        <button type="submit" className="submitButton">Submit</button>
      </form>
    )}
    {renderResults()}
  </div>
);
}

export default ChipCalculator;