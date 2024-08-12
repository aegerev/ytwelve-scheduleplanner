import React, { useState } from 'react';
import { TaskForm } from './components/TaskForm.jsx';
import { Task } from './components/Task.jsx';

function App() {

  const [tasks, setTasks] = React.useState([]);

	const addTask = (task) => {
		setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
	};

	const deleteTask = (taskId) => {
		setTasks(tasks.filter((task) => task.id !== taskId));
	};

	const toggleTaskCompletion = (taskId) => {
		setTasks(
			tasks.map((task) =>
				task.id === taskId ? { ...task, completed: !task.completed } : task
			)
		);
	};

	return (
		<div className="app">
			<h1>Task Manager</h1>
			<TaskForm addTask={addTask} />
			<div className="tasks">
				{tasks.map((task) => (
					<Task
						key={task.id}
						task={task}
						deleteTask={deleteTask}
						toggleTaskCompletion={toggleTaskCompletion}
					/>
				))}
			</div>
		</div>
	);
}

export default App