import { useState } from "react";

export default function NewTask({ onSave }) {
	const [enteredTask, setEnteredTask] = useState();

	function handleChange(event) {
		setEnteredTask(event.target.value);
	}

	return (
		<div className="flex items-center gap-4">
			<input
				type="text"
				placeholder="Enter your task."
				className="w-64 px-2 py-1 rounded-sm bg-stone-200"
				onChange={handleChange}
				value={enteredTask}
			/>
			<button className="text-stone-700 hover:text-stone-950" onClick={() => onSave(enteredTask)}>
				Add Task
			</button>
		</div>
	);
}
