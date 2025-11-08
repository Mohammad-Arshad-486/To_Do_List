import "../style/home.css";

const AddTask=  ({ newTask, setNewTask, handleAddTask, showError }) => {
    return (
        <>
        <div className="in">
        <h3>Add Task</h3>
        <p>
          Name:&nbsp;&nbsp;
          <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Add a new task..." id="input-text" />
          <button onClick={handleAddTask}>Add Task</button>
        </p>
        {showError && <p style={{ color: "red" }}>Please enter a task name.</p>}
      </div>
        </>
    )
};

export default AddTask;