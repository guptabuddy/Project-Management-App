import { useState } from "react";

export default function NewTask({ onAdd }) {
	const [enteredTask, setEnteredTask] = useState("");

	function handleChange(event) {
		setEnteredTask(event.target.value);
	}

	function handleClick() {
		if (enteredTask.trim() === "") {
			return;
		}
		// With above line, we made sure that the enteredTask is not empty, so we can add it to the state.

		onAdd(enteredTask);
		setEnteredTask("");
	}

	return (
		<div className="flex items-center gap-4">
			<input
				type="text"
				placeholder="Enter your task."
				className="w-64 px-2 py-1 rounded-sm bg-stone-200"
				onChange={handleChange}
				value={enteredTask}
				// One thing we have to take care of is, on 1st render of the NewTask component, the enteredTask value will be undefined, so we have to give an initial value to the State variable.
				// We can do this by giving an empty string as the initial value of the State variable.
			/>

			{/* <button className="text-stone-700 hover:text-stone-950" onClick={() => onSave(enteredTask)}> */}

			{/* Here we have to use the function which is defined in this component (handleClick) because we have to do 2 things, 1st we have to pass the task to the App component, 2nd we have to make the Input field empty so that the user can enter a new task. */}
			<button className="text-stone-700 bg-stone-100 px-2 py-1 rounded-sm hover:text-stone-950 hover:bg-stone-200" onClick={handleClick}>
				Add Task
			</button>
		</div>
	);
}
