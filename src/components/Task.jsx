import React from 'react';

export function Task({ task, deleteTask, toggleTaskCompletion }) {
	return (
		<div className = {`task ${task.completed ? 'completed' : ''}`}>
			{/*Todo: Add the dynamic className to the parent `div`. It should be 'task' when the task is pending, and 'task completed' when the task is completed */}
			<input
				type="checkbox"
				checked={task.completed}

				className="task-checkbox"
			/>
			<span className="task-text">{task.text}</span>
			<button onClick={() => deleteTask(task.id)} className="delete-task">
				Delete
			</button>
		</div>
	);
}

