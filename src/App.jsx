import { useState } from "react";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Main } from "./components/main/Main";
const data = [
  {
    id: 1,
    isDeleted: true,
    columnIndex: 1,
    title: 'HTML',
    description: 'Task description about HTML',
    deadline: 2024,
    tags: ['html', 'font', 'color'],
  },
  {
    id: 2,
    isDeleted: false,
    columnIndex: 0,
    title: 'CSS',
    description: 'Task description about CSS',
    deadline: 2024,
    tags: ['css', 'column'],
  },
  {
    id: 3,
    isDeleted: false,
    columnIndex: 0,
    title: 'JavaScript',
    description: 'Task description about JavaScript',
    deadline: 2024,
    tags: ['js', 'loops', 'if'],
  }
]
function App() {
  const [usedTaskId, setUsedTaskID] = useState(3);
  const [isAsideVisible, setAsideVisibility] = useState(false);
  const [tasks, setTasks] = useState(data);

  function updateAsideVisibility(newVisibility) {
    setAsideVisibility(newVisibility);
  }

  function addTask(task) {
    setTasks(prev => [
      ...prev,
      {
        id: usedTaskId +1,
        isDeleted: false,
        ...task
      }
    ]);
    setAsideVisibility(false);
    setUsedTaskID(usedTaskId + 1);
  }

  function removeTask(taskId) {
    setTasks(prev => prev.map(task => task.id !== taskId
      ? task
      : {
        ...task,
        isDeleted: true,
      }))
  }

  return (
    <>
      <Header updateAsideVisibility={updateAsideVisibility} />
      <Main tasks={tasks.filter(task => !task.isDeleted)}
      isAsideVisible={isAsideVisible}
      addTask={addTask}
      removeTask={removeTask}
      />
      <Footer />
    </>
  );
}

export default App;
