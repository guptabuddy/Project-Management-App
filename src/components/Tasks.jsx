import { useRef, useState } from "react";
import NewTask from "./NewTask.jsx";
import Modal from "./Modal.jsx";

export default function Tasks({ onAdd, onDelete, tasks }) {
	const modal = useRef();

	const [taskToDelete, setTaskToDelete] = useState(null);

	function handleDeleteClick(task) {
		// 1. Save the task details to our bridge state
		setTaskToDelete(task);
		// 2. Open the confirmation modal via your imperative handle
		modal.current.open();
	}

	function handleConfirmDelete() {
		if (taskToDelete) {
			// 3. The user clicked "Yes", trigger the actual deletion from App component
			onDelete(taskToDelete.id);
			// 4. Reset the state and close modal
			setTaskToDelete(null);
			modal.current.close();
		}
	}

	function handleCancelDelete() {
		// User changed their mind, just clear the bridge state
		setTaskToDelete(null);
		modal.current.close();
	}

	return (
		<>
			<Modal ref={modal} onClose={handleCancelDelete}>
				<h2 className="text-xl font-bold text-stone-700 my-4">This will delete your Task.</h2>
				{taskToDelete && <p className="text-stone-600 mb-4 wrap-break-word">Your task is:- "{taskToDelete.text}".</p>}
				<p>Are you sure you want to delete this Task? </p>

				<div className="flex justify-end gap-4">
					<button
						className="bg-stone-200 text-red-600 px-4 py-1 rounded-md my-4 hover:cursor-pointer hover:bg-stone-100"
						onClick={handleConfirmDelete}
					>
						Yes
					</button>
					<button
						className="bg-stone-200 text-green-600 px-4 py-1 rounded-md my-4 hover:cursor-pointer hover:bg-stone-100"
						onClick={handleCancelDelete}
					>
						No
					</button>
				</div>
			</Modal>

			<section>
				<h2 className="text-2xl font-bond text-stone-700 mb-4">TASKS</h2>
				<NewTask onAdd={onAdd} />

				{tasks.length === 0 && <p className="text-stone-800 font-semibold my-4">This Project does not have any tasks yet.</p>}

				{tasks.length > 0 && (
					<ul className="p-4 mt-8 rounded-md bg-stone-100">
						{tasks.map((task) => (
							<li key={task.id} className="flex justify-between gap-4 my-4">
								<span className="w-4/5 min-w-0 wrap-break-word">{task.text}</span>
								<button
									className="text-stone-700 text-sm text-right hover:text-red-500"
									// onClick={() => onDelete(task.id)}
									onClick={() => handleDeleteClick(task)}
								>
									Delete Task
								</button>
							</li>
						))}
					</ul>
				)}
			</section>
		</>
	);
}
