import CourseGoal from "./components/CourseGoal.tsx";
import "./App.css";
import goalsImg from "./assets/react.svg";
import Header from "./components/Header.tsx";
import { useState } from "react";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "My new goal",
        description: "Description of my new goal",
      };
      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your COurse Goals</h1>
        <button onClick={handleAddGoal}>Add New Goal</button>
        <ul>
          {goals.map((goal) => (
            <li key={goal.id}>
              <CourseGoal title={goal.title}>
                <p>{goal.description}</p>
              </CourseGoal>
            </li>
          ))}
        </ul>
      </Header>
    </main>
  );
}

export default App;
