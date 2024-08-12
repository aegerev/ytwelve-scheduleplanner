import React, { useState } from 'react';

export function TaskForm({ addTask }) {
	const [input, setInput] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!input.trim()) return;
		addTask(input.trim());
		setInput('');
	};

return (
		<div className="app">
			<h1>Task Manager</h1>
			<p>Number of tasks: </p>

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