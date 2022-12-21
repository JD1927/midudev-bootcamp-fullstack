import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Title course={course} />
      <Content part={part1} exercise={exercises1}/>
      <Content part={part2} exercise={exercises2}/>
      <Content part={part3} exercise={exercises3}/>
      <Total totalExercises={exercises1 + exercises2 + exercises3}/>

    </div>
  );
};

const Title = ({ course }) => (<h1>{course}</h1>);

const Content = ({ part, exercise }) => <p>{part} {exercise}</p>;

const Total = ({ totalExercises }) => <p>Number of exercises {totalExercises}</p>

ReactDOM.render(<App />, document.getElementById('root'));

