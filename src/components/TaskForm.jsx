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
		<form className="task-form" onSubmit={handleSubmit}>
			<input
				type="text"
				className="task-input"
				placeholder="Add a new task"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button type="submit" className="task-button">
				Add Task
			</button>
		</form>
	);
}