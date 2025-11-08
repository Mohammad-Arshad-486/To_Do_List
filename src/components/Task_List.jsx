import "../style/home.css";

const TaskList = ({tasks, setEditingTask, handleDeleteTask}) => {
    return (
        <div className="out">
        <h3>Tasks:</h3>
        {tasks.length === 0 ? (
          <p>Empty......</p>
        ) : (
          <ol>
            {tasks.map((task, index) => (
              <li key={index}>
                <span className="task-text">{task}</span>
                <div className="btn-group">
                  <button className="edit-btn" onClick={() => setEditingTask(index)}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => handleDeleteTask(index)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    );
}
export default TaskList;