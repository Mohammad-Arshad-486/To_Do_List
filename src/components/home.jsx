import "../style/home.css";
import { useState, useEffect } from "react";
import EditModal from "./EditTask";
import AddTask from "./Add_Task";
import TaskList from "./Task_List";

function Home() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem("tasks");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() === "") {
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
      return;
    }

    setTasks([...tasks, newTask.trim()]);
    setNewTask("");
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEditTask = (index, newValue) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newValue;
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  return (
    <div className="home">
      <div className="header">To-Do List</div>
      {AddTask({ newTask, setNewTask, handleAddTask, showError })}
      {TaskList({ tasks, setEditingTask, handleDeleteTask })}

      {editingTask !== null && <EditModal task={tasks[editingTask]} onSave={(newValue) => handleEditTask(editingTask, newValue)} onCancel={() => setEditingTask(null)} />}
    </div>
  );
}

export default Home;
