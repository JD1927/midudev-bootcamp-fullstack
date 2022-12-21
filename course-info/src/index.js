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
  const contentList = [
    { part: part1, exercise: exercises1 },
    { part: part2, exercise: exercises2 },
    { part: part3, exercise: exercises3 },
  ];
  const totalExercises = contentList.reduce(((acc, curr) => acc + curr.exercise), 0);

  return (
    <div>
      <Title course={course} />
      <Content contentList={contentList}/>
      <Total totalExercises={totalExercises}/>
    </div>
  );
};

const Title = ({ course }) => (<h1>{course}</h1>);

const Content = ({ contentList }) => {
  return (
    <div>
      {
        contentList.map((content, idx) => <Part key={idx} part={content.part} exercise={content.exercise}/>)
      }
    </div>
  );
};

const Part = ({ part, exercise }) => <p>{part} {exercise}</p>;

const Total = ({ totalExercises }) => <p>Number of exercises {totalExercises}</p>

ReactDOM.render(<App />, document.getElementById('root'));

