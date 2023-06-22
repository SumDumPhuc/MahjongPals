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
      const resultField2 = simplifyExpression(values.field2);
      const resultField4 = simplifyExpression(values.field4);
      const resultField6 = simplifyExpression(values.field6);
      const resultField8 = simplifyExpression(values.field8);

      return (
        <div className="results">
          <h2>Chip Log</h2>
          <div className="valuesContainer">
            <div className="valuePair">
              <span>{values.field1} : </span>
              <span>{resultField2}</span>
            </div>
            <div className="valuePair">
            <span>{values.field3} : </span>
              <span>{resultField4}</span>
            </div>
            <div className="valuePair">
            <span>{values.field5} : </span>
              <span>{resultField6}</span>
            </div>
            <div className="valuePair">
             <span>{values.field7} : </span>
              <span>{resultField8}</span>
            </div>
          </div>
          <button onClick={handleEdit} className="editButton">Edit</button>
        </div>
      );
    }
    return null; // Render nothing if form is not submitted
  };

return (
    <div className="container">
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